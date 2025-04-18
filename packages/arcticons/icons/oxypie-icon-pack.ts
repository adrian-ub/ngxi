import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOxypieIconPackIcon],svg[arcticons-oxypie-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.668 26.553v-7.104h2.326c1.315 0 2.38 1.068 2.38 2.386s-1.065 2.386-2.38 2.386h-2.326m-1.898.556v2.398c0 .98-.795 1.776-1.776 1.776h0a1.77 1.77 0 0 1-1.256-.52"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.77 21.847v2.93c0 .98-.795 1.776-1.776 1.776h0c-.98 0-1.776-.795-1.776-1.776v-2.93m-1.776 0l-3.552 4.706m3.552 0l-3.552-4.706"></svg:path><svg:circle cx="33.218" cy="19.671" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.218 21.847v4.706m5.049-.896a1.78 1.78 0 0 1-1.543.896h0c-.98 0-1.776-.795-1.776-1.776v-1.154c0-.981.795-1.776 1.776-1.776h0c.98 0 1.776.795 1.776 1.776v.577h-3.552"></svg:path><svg:rect width="4.706" height="7.104" x="9.5" y="19.449" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.353" ry="2.353"></svg:rect>`,
})
export class ArcticonsOxypieIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
