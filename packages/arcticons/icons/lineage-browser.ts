import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLineageBrowserIcon],svg[arcticons-lineage-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="22.584" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.086 9.24l1.603 4.064a14.2 14.2 0 0 0 8.007 8.007l4.065 1.603a1.168 1.168 0 0 1 0 2.172l-4.065 1.603a14.2 14.2 0 0 0-8.007 8.007l-1.603 4.065a1.168 1.168 0 0 1-2.172 0l-1.603-4.065a14.2 14.2 0 0 0-8.007-8.007l-4.065-1.603a1.168 1.168 0 0 1 0-2.172l4.065-1.603a14.2 14.2 0 0 0 8.007-8.007l1.603-4.065a1.168 1.168 0 0 1 2.172 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.013 18.732a10.7 10.7 0 0 0 4.255 4.255h0a1.155 1.155 0 0 1 0 2.026h0a10.7 10.7 0 0 0-4.255 4.255h0a1.155 1.155 0 0 1-2.026 0h0a10.7 10.7 0 0 0-4.255-4.255h0a1.155 1.155 0 0 1 0-2.026h0a10.7 10.7 0 0 0 4.255-4.255h0a1.155 1.155 0 0 1 2.026 0"></svg:path>`,
})
export class ArcticonsLineageBrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
