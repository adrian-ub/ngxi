import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPrinterBoldIcon],svg[iconamoon-printer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2.5"><svg:path d="M8 18H6a2 2 0 0 1-2-2V7h16v9a2 2 0 0 1-2 2h-2M8 3h8v4H8z"></svg:path><svg:path stroke-linecap="round" d="M12 11H8"></svg:path><svg:path d="M8 15h8v6H8z"></svg:path></svg:g>`,
})
export class IconamoonPrinterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
