import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiEmailFilledIcon],svg[weui-email-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m16.031 1.914l-6.875 5.5a.25.25 0 0 1-.312 0l-6.875-5.5l-.938 1.172l6.876 5.5a1.75 1.75 0 0 0 2.186 0l6.876-5.5z"></svg:path>`,
})
export class WeuiEmailFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
