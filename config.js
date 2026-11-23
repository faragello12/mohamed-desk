// إعدادات المزامنة (اختياري)
// سيبهم فاضيين = البيانات بتتحفظ في المتصفح بس (كل جهاز لوحده).
// حط بيانات مشروع Supabase = المكتب يتزامن بين الموبايل واللابتوب بعد ما تسجّل دخول.
// الاتنين دول بتلاقيهم في Supabase: Project Settings ثم API.
// الـ anon key عادي يبان في الموقع، الحماية جاية من الـ RLS اللي في ملف supabase-setup.sql
window.DESK_CONFIG = {
  supabaseUrl: "",
  supabaseAnonKey: ""
};
