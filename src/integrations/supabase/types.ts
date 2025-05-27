export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      contact_forms: {
        Row: {
          created_at: string
          disponibilidad: string
          email: string
          empresa: string
          id: string
          interes: string
          mensaje: string | null
          nombre: string
          notas: string | null
          odoo: string
          sistemas: string
          telefono: string
          usuarios: string
        }
        Insert: {
          created_at?: string
          disponibilidad: string
          email: string
          empresa: string
          id?: string
          interes: string
          mensaje?: string | null
          nombre: string
          notas?: string | null
          odoo: string
          sistemas: string
          telefono: string
          usuarios: string
        }
        Update: {
          created_at?: string
          disponibilidad?: string
          email?: string
          empresa?: string
          id?: string
          interes?: string
          mensaje?: string | null
          nombre?: string
          notas?: string | null
          odoo?: string
          sistemas?: string
          telefono?: string
          usuarios?: string
        }
        Relationships: []
      }
      contactform: {
        Row: {
          created_at: string
          disponibilidad: string
          email: string
          empresa: string
          id: string
          interes: string
          mensaje: string | null
          nombre: string
          notas: string | null
          odoo: string
          sistemas: string
          telefono: string
          usuarios: string
        }
        Insert: {
          created_at?: string
          disponibilidad: string
          email: string
          empresa: string
          id?: string
          interes: string
          mensaje?: string | null
          nombre: string
          notas?: string | null
          odoo: string
          sistemas: string
          telefono: string
          usuarios: string
        }
        Update: {
          created_at?: string
          disponibilidad?: string
          email?: string
          empresa?: string
          id?: string
          interes?: string
          mensaje?: string | null
          nombre?: string
          notas?: string | null
          odoo?: string
          sistemas?: string
          telefono?: string
          usuarios?: string
        }
        Relationships: []
      }
      contacto_bdrgroup: {
        Row: {
          created_at: string
          email: string
          empresa: string | null
          id: string
          mensaje: string
          nombre: string
        }
        Insert: {
          created_at?: string
          email: string
          empresa?: string | null
          id?: string
          mensaje: string
          nombre: string
        }
        Update: {
          created_at?: string
          email?: string
          empresa?: string | null
          id?: string
          mensaje?: string
          nombre?: string
        }
        Relationships: []
      }
      contactos_ski_solution: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          created_at: string
          email: string | null
          empresa: string
          id: number
          interes: string
          mensaje: string
          nombre: string | null
          telefono: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          empresa: string
          id?: number
          interes: string
          mensaje: string
          nombre?: string | null
          telefono: string
        }
        Update: {
          created_at?: string
          email?: string | null
          empresa?: string
          id?: number
          interes?: string
          mensaje?: string
          nombre?: string | null
          telefono?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      interes_tipo:
        | "informacion"
        | "demostracion"
        | "roadshow"
        | "implementar"
        | "migrar"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      interes_tipo: [
        "informacion",
        "demostracion",
        "roadshow",
        "implementar",
        "migrar",
      ],
    },
  },
} as const
