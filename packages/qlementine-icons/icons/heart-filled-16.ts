import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsHeartFilled16Icon],svg[qlementine-icons-heart-filled-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 1C14.03 1 16 2.92 16 5.62c0 3.25-2.81 6.43-7.37 9.15c-.183.115-.447.23-.63.23c-.173 0-.447-.115-.63-.23C2.81 12.05 0 8.87 0 5.62C0 2.92 1.97 1 4.5 1c1.6 0 2.76.834 3.5 2.07C8.742 1.82 9.9 1 11.5 1"></svg:path>`,
})
export class QlementineIconsHeartFilled16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
