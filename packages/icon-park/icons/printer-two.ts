import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPrinterTwoIcon],svg[icon-park-printer-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M38 20V8C38 6.89543 37.1046 6 36 6H12C10.8954 6 10 6.89543 10 8V20"></svg:path><svg:rect width="36" height="22" x="6" y="20" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M20 34H35V42H20V34Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 26H15"></svg:path></svg:g>`,
})
export class IconParkPrinterTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
