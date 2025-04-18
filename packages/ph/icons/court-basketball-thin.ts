import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCourtBasketballThinIcon],svg[ph-court-basketball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 112h-12a36 36 0 0 1 0-72h12ZM28 92h12a36 36 0 0 1 0 72H28Zm0 100v-20h12a44 44 0 0 0 0-88H28V64a4 4 0 0 1 4-4h92v136H32a4 4 0 0 1-4-4m196 4h-92V60h92a4 4 0 0 1 4 4v20h-12a44 44 0 0 0 0 88h12v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCourtBasketballThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
