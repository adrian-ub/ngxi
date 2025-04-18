import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeApolloIcon],svg[material-icon-theme-apollo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7e57c2" d="M31.93 14.457a.51.51 0 0 0-.506-.457h-2.01a.497.497 0 0 0-.491.559l.014.134c.616 6.284-4.097 12.817-10.29 14.044A13.009 13.009 0 1 1 24.3 6h4.19a16.013 16.013 0 1 0 3.44 8.457"></svg:path><svg:circle cx="24.533" cy="4.267" r="4.267" fill="#7e57c2"></svg:circle><svg:path fill="#7e57c2" d="M17 8h-3L8 24h3z"></svg:path><svg:path fill="#7e57c2" d="M15 8h3l6 16h-3zm2.88 13H12v-3h4.75z"></svg:path>`,
})
export class MaterialIconThemeApolloIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
