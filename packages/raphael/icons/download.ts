import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelDownloadIcon],svg[raphael-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1.466C7.973 1.466 1.466 7.973 1.466 16S7.973 30.534 16 30.534S30.534 24.027 30.534 16S24.027 1.466 16 1.466m0 27.326a2.806 2.806 0 1 1 0-5.611a2.806 2.806 0 0 1 0 5.611m0-7.705l-7.858-6.562h3.47V5.747h8.778v8.778h3.468z"></svg:path>`,
})
export class RaphaelDownloadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
