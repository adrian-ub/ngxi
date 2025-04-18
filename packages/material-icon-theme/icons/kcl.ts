import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeKclIcon],svg[material-icon-theme-kcl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-width=".948"><svg:path fill="#9ccc65" d="m2 3l5.087 1.007L9 12l-5-1Z"></svg:path><svg:path fill="#e91e63" d="m3.957 11.996l5.087 1.007l1.912 7.993l-5-1z"></svg:path><svg:path fill="#26c6da" d="m10 13l5-2l7 5l-5 2z"></svg:path><svg:path fill="#ffcc80" d="m10 12l7-3l1-5l-7 3z"></svg:path></svg:g>`,
})
export class MaterialIconThemeKclIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
