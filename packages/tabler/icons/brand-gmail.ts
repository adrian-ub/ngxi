import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandGmailIcon],svg[tabler-brand-gmail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 20h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3zM5 20h3V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1M16 4l-4 4l-4-4"></svg:path><svg:path d="m4 6.5l8 7.5l8-7.5"></svg:path></svg:g>`,
})
export class TablerBrandGmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
