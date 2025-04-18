import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageServerFillIcon],svg[mage-server-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.735 10.82V5.11a1.89 1.89 0 0 0-1.9-1.9H4.155a1.86 1.86 0 0 0-1.34.56a1.9 1.9 0 0 0-.56 1.34v5.72c.001.417.142.822.4 1.15a1.8 1.8 0 0 0-.4 1.15v5.76a1.9 1.9 0 0 0 1.9 1.9h15.68a1.91 1.91 0 0 0 1.91-1.9v-5.76a1.87 1.87 0 0 1 0-2.34zm-4.2 6.22h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2m0-8.06h-3a1 1 0 0 1 0-2h3a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageServerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
