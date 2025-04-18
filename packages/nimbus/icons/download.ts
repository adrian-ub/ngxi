import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusDownloadIcon],svg[nimbus-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 14.75h11V16h-11zm.39-5.45l4.27 3.88a1.26 1.26 0 0 0 1.68 0l4.27-3.88a1.25 1.25 0 0 0-.84-2.18H9.8V1.25A1.25 1.25 0 0 0 8.55 0h-1.1A1.25 1.25 0 0 0 6.2 1.25v5.87H3.73a1.25 1.25 0 0 0-.84 2.18m.84-.93h3.72V1.25h1.1v7.12h3.72L8 12.25z"></svg:path>`,
})
export class NimbusDownloadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
