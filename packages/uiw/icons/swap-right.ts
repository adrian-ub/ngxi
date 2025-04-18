import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwSwapRightIcon],svg[uiw-swap-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.625 12.08H.7c-.176 0-.7.092-.7.71s.524.71.7.71h18.599c.406 0 .701-.287.701-.71a.67.67 0 0 0-.164-.453a4 4 0 0 0-.173-.187L14.34 6.68q-.522-.417-.96.025q-.438.44-.058.95z"></svg:path>`,
})
export class UiwSwapRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
