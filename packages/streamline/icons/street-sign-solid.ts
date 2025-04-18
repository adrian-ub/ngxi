import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStreetSignSolidIcon],svg[streamline-street-sign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75.795a.75.75 0 0 0-.885-.738H2.538a.25.25 0 0 0-.176.073L.379 2.113a.25.25 0 0 0 0 .353L2.362 4.45a.25.25 0 0 0 .176.074H6.25V6.5H2.538a.25.25 0 0 0-.176.074L.379 8.558a.25.25 0 0 0 0 .353l1.983 1.983a.25.25 0 0 0 .176.073H6.25v2.238a.75.75 0 1 0 1.5 0V7.807h3.712a.25.25 0 0 0 .177-.074L13.62 5.75a.25.25 0 0 0 0-.353l-1.98-1.983a.25.25 0 0 0-.177-.073H7.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineStreetSignSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
