import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSeekForward16Icon],svg[qlementine-icons-seek-forward-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3.3c0-.874 1.04-1.33 1.68-.731l5.03 4.7a.997.997 0 0 1 0 1.46l-5.03 4.7c-.639.597-1.68.143-1.68-.731v-9.4zm8 0c0-.874 1.04-1.33 1.68-.731l5.03 4.7a.997.997 0 0 1 0 1.46l-5.03 4.7c-.639.597-1.68.143-1.68-.731v-9.4z"></svg:path>`,
})
export class QlementineIconsSeekForward16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
