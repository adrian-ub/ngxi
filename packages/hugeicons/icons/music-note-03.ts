import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMusicNote03Icon],svg[hugeicons-music-note-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="6.5" cy="18.5" r="3.5"></svg:circle><svg:circle cx="18" cy="16" r="3"></svg:circle><svg:path d="M10 18.5V7c0-.923 0-1.385.264-1.672c.263-.287.754-.329 1.735-.413c4.023-.343 6.91-1.655 8.356-2.505c.296-.174.444-.26.544-.203s.101.225.101.559V16"></svg:path><svg:path d="M10 10c5.867 0 9.778-2.333 11-3"></svg:path></svg:g>`,
})
export class HugeiconsMusicNote03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
