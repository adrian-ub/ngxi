import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsHeartFilled24Icon],svg[qlementine-icons-heart-filled-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.2 2c3.8 0 6.75 2.74 6.75 6.6c0 4.64-4.21 9.19-11.1 13.1c-.274.164-.67.329-.945.329c-.26 0-.67-.164-.945-.329C4.11 17.81-.14 13.27-.14 8.6C-.14 4.74 2.82 2 6.61 2c2.4 0 4.15 1.19 5.25 2.96C12.97 3.18 14.71 2 17.11 2z"></svg:path>`,
})
export class QlementineIconsHeartFilled24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
