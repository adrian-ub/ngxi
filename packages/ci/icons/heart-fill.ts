import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciHeartFillIcon],svg[ci-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.4A5.4 5.4 0 0 1 7.5 3A5.991 5.991 0 0 1 12 5a5.991 5.991 0 0 1 4.5-2A5.4 5.4 0 0 1 22 8.4c0 5.356-6.379 9.4-10 12.6C8.387 17.773 2 13.76 2 8.4Z"></svg:path>`,
})
export class CiHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
