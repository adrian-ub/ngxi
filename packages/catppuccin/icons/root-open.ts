import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinRootOpenIcon],svg[catppuccin-root-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="m1.875 8l.686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:circle cx="11.5" cy="12" r="3" fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="11.5" cy="12" r=".5" fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class CatppuccinRootOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
