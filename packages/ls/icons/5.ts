import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ls5Icon],svg[ls-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m203 72l-36 192c20-6 42-9 65-9c137 0 248 112 248 249S369 752 232 752C115 752 27 672 0 562h73c25 71 81 122 160 122c99 0 179-80 179-179c0-98-80-180-179-180c-26 0-53 6-81 14c-30 8-51 14-78 27L144 0h317v72z"></svg:path>`,
})
export class Ls5Icon {
  readonly viewBox = input("0 0 480 752")
  readonly width = input("0.64em")
  readonly height = input("1em")
}
