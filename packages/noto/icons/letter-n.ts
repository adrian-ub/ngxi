import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoLetterNIcon],svg[noto-letter-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40C0E7" d="M108.54 15.2H86.65c-1.31 0-2.36 1.06-2.36 2.36v62.91L43.35 16.29a2.35 2.35 0 0 0-1.99-1.09h-21.9c-1.3 0-2.36 1.06-2.36 2.36v100.97c0 1.3 1.06 2.36 2.36 2.36h21.9c1.3 0 2.37-1.06 2.37-2.36V55.61l40.93 64.18c.43.68 1.19 1.09 2 1.09h21.89c1.3 0 2.36-1.06 2.36-2.36V17.56a2.38 2.38 0 0 0-2.37-2.36"></svg:path>`,
})
export class NotoLetterNIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
