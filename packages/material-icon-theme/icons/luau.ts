import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeLuauIcon],svg[material-icon-theme-luau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#03A9F4" d="M22.495 6.331L6.33 2L2 18.164l16.164 4.33z"></svg:path><svg:path fill="#FAFAFA" d="M19.933 7.81L16.7 6.944l-.866 3.233l3.233.866z"></svg:path></svg:g>`,
})
export class MaterialIconThemeLuauIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
