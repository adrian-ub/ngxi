import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPrinterTwoIcon],svg[icon-park-solid-printer-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M38 20V8a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v12"></svg:path><svg:rect width="36" height="22" x="6" y="20" rx="2"></svg:rect><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20 34h15v8H20z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 26h3"></svg:path></svg:g>`,
})
export class IconParkSolidPrinterTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
