import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFontSansIcon],svg[ri-font-sans-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h12v2h-9v6h8v2h-8v7H7z"></svg:path>`,
})
export class RiFontSansIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
