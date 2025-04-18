import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGbSct4x3Icon],svg[flag-gb-sct-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0065bd" d="M0 0h640v480H0z"></svg:path><svg:path stroke="#fff" stroke-width=".6" d="m0 0l5 3M0 3l5-3" transform="scale(128 160)"></svg:path>`,
})
export class FlagGbSct4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
