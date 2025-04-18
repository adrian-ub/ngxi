import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSpwnIcon],svg[material-icon-theme-spwn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g transform="translate(13.512 10.42)scale(.06153)"><svg:circle cx="30.125" cy="-29" r="110.12" fill="#e040fb"></svg:circle><svg:circle cx="-79.266" cy="80.375" r="110.12" fill="#00bfa5"></svg:circle><svg:path fill="#f5f5f5" d="m30.875-29.75l-55.437-.001l-55.437.001l27.624 27.624l-57.45 57.45l56.063 56.063l57.45-57.45l27.188 27.188V25.686z"></svg:path></svg:g>`,
})
export class MaterialIconThemeSpwnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
