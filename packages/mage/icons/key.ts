import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageKeyIcon],svg[mage-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.543 4.471A6.501 6.501 0 0 0 8.618 7.255a6.52 6.52 0 0 0 .34 4.447L2.5 18.179V21.5h3.364l-.318-1.99l1.965.33l1.67-1.661l-.318-1.99l1.976.318l1.47-1.472a6.5 6.5 0 0 0 8.06-2.261a6.52 6.52 0 0 0-.838-8.338z"></svg:path><svg:path d="M16.99 10.23a2.258 2.258 0 0 1-3.476-2.853a2.26 2.26 0 0 1 3.477-.339a2.275 2.275 0 0 1 0 3.192"></svg:path></svg:g>`,
})
export class MageKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
