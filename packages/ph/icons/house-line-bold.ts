import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHouseLineBoldIcon],svg[ph-house-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 204h-12v-60a12 12 0 0 0 12.49-19.78l-98.35-98.37a20 20 0 0 0-28.28 0L15.51 124.2A12 12 0 0 0 28 144v60H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M52 121.65l76-76l76 76V204h-40v-52a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v52H52ZM140 204h-24v-40h24Z"></svg:path>`,
})
export class PhHouseLineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
