import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoonCloudLittleRainIcon],svg[hugeicons-moon-cloud-little-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.997 14.5V16m-3 1.5V19m6-1.5V19m-8.5 1.5V22m11-1.5V22m-5.5-1.5V22m5.481-10.955h.022c2.485 0 4.5 2.03 4.5 4.534C22 17.15 21 18.5 20 19m-2.522-7.955a6 6 0 0 0 .022-.504C17.5 7.481 15.038 5 12 5c-2.877 0-5.238 2.225-5.48 5.06m10.958.985a5.54 5.54 0 0 1-1.235 3.022M6.52 10.06C3.984 10.303 2 12.456 2 15.075c0 1.648.786 3.006 2 3.925m2.52-8.94q.237-.023.48-.023c1.126 0 2.165.375 3 1.008"></svg:path><svg:path d="M10 5.138a4.1 4.1 0 0 0-.466-1.253A4.03 4.03 0 0 0 7.136 2a3.18 3.18 0 0 1-1.547 3.138a3.12 3.12 0 0 1-3.465-.216a4.1 4.1 0 0 0 .418 3.04a4.02 4.02 0 0 0 4.594 1.885"></svg:path></svg:g>`,
})
export class HugeiconsMoonCloudLittleRainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
