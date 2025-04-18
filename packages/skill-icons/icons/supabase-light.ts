import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsSupabaseLightIcon],svg[skill-icons-supabase-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F2ED" rx="60"></svg:rect><svg:g clip-path="url(#skillIconsSupabaseLight2)"><svg:path fill="url(#skillIconsSupabaseLight0)" d="M144.757 223.193c-5.061 6.373-15.323 2.881-15.445-5.257l-1.783-119.029h80.035c14.496 0 22.581 16.744 13.567 28.097z"></svg:path><svg:path fill="url(#skillIconsSupabaseLight1)" fill-opacity=".2" d="M144.757 223.193c-5.061 6.373-15.323 2.881-15.445-5.257l-1.783-119.029h80.035c14.496 0 22.581 16.744 13.567 28.097z"></svg:path><svg:path fill="#3ECF8E" d="M112.207 31.666c5.061-6.375 15.323-2.882 15.445 5.256l.782 119.029H49.4c-14.497 0-22.582-16.744-13.567-28.097z"></svg:path></svg:g><svg:defs><svg:lineargradient id="skillIconsSupabaseLight0" x1="127.529" x2="198.661" y1="125.299" y2="155.132" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#249361"></svg:stop><svg:stop offset="1" stop-color="#3ECF8E"></svg:stop></svg:lineargradient><svg:lineargradient id="skillIconsSupabaseLight1" x1="95.993" x2="128.433" y1="82.12" y2="143.187" gradientUnits="userSpaceOnUse"><svg:stop></svg:stop><svg:stop offset="1" stop-opacity="0"></svg:stop></svg:lineargradient><svg:clippath id="skillIconsSupabaseLight2"><svg:path fill="#fff" d="M32 28h192.92v200H32z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SkillIconsSupabaseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
