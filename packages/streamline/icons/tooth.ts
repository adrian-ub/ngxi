import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineToothIcon],svg[streamline-tooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.49 5.132c.324-2.947 2.917-3.231 4.682-2.208c.555.322 1.1.322 1.656 0c1.765-1.023 4.358-.739 4.682 2.208c.325 2.956-1.34 6.084-2.232 7.282c-.203.273-.53.403-.87.403a1.32 1.32 0 0 1-1.242-.873l-.315-.874a.905.905 0 0 0-1.702 0l-.315.874a1.32 1.32 0 0 1-1.242.873c-.34 0-.668-.13-.87-.403c-.892-1.198-2.557-4.326-2.232-7.282"></svg:path><svg:path d="M8.291 5.28c-1.06.386-1.63.378-2.582 0"></svg:path></svg:g>`,
})
export class StreamlineToothIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
