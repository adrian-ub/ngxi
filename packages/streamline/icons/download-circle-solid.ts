import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDownloadCircleSolidIcon],svg[streamline-download-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14m3.146-5.69l-2.793 2.793a.5.5 0 0 1-.707 0L3.854 8.31a.5.5 0 0 1 .353-.853H6V3.75a1 1 0 0 1 2 0v3.707h1.793a.5.5 0 0 1 .353.853" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDownloadCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
