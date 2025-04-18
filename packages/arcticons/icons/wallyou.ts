import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWallyouIcon],svg[arcticons-wallyou-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.344 38.304H4.5L17.906 19.01l8.264 11.892m-5.826 7.402l11.578-14.67L43.5 38.305zM37.365 20.07l-1.47-1.618l-2.14-.04l.105-2.183l-1.485-1.542l1.618-1.47l.04-2.14l2.183.105l1.542-1.485l1.469 1.618l2.14.04l-.105 2.183l1.486 1.541l-1.618 1.47l-.04 2.14l-2.183-.105z"></svg:path><svg:circle cx="37.589" cy="14.964" r="1.706" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsWallyouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
