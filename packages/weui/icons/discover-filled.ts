import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiDiscoverFilledIcon],svg[weui-discover-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.396-11.396l-2.957 5.749l5.75-2.957l2.956-5.749l-5.75 2.957z"></svg:path>`,
})
export class WeuiDiscoverFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
