import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsEntryOutlineIcon],svg[healthicons-entry-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M23 6.775v34.45l11-3.666V10.442zm-.684-2.336A1 1 0 0 0 21 5.387v37.226a1 1 0 0 0 1.316.948l13-4.333a1 1 0 0 0 .684-.949V9.721a1 1 0 0 0-.684-.949z" clip-rule="evenodd"></svg:path><svg:path d="M27 23c0 1.105-.448 2-1 2s-1-.895-1-2s.448-2 1-2s1 .895 1 2"></svg:path><svg:path fill-rule="evenodd" d="M21 8h-9v31h9v-2h-7V10h7z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsEntryOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
