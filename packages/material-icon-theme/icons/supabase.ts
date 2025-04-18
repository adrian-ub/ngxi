import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSupabaseIcon],svg[material-icon-theme-supabase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66bb6a" d="M29.92 12H16V2.85a1 1 0 0 0-1.78-.624L1.3 18.376A1 1 0 0 0 2.08 20H16v9.15a1 1 0 0 0 1.78.624l12.92-16.15A1 1 0 0 0 29.92 12"></svg:path>`,
})
export class MaterialIconThemeSupabaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
