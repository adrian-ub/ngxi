import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPrinterIcon],svg[icon-park-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M37 32H11V44H37V32Z"></svg:path><svg:path stroke-linecap="round" d="M4 20H44V38H37.0173V32H10.9805V38H4V20Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" d="M38 4H10V20H38V4Z"></svg:path></svg:g>`,
})
export class IconParkPrinterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
