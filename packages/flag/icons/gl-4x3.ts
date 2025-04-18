import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGl4x3Icon],svg[flag-gl-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h640v480H0z"></svg:path><svg:path fill="#d00c33" d="M0 240h640v240H0zm80 0a160 160 0 1 0 320 0a160 160 0 0 0-320 0"></svg:path>`,
})
export class FlagGl4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
