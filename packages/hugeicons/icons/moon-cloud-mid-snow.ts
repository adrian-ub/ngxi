import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoonCloudMidSnowIcon],svg[hugeicons-moon-cloud-mid-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 16v6m2.5-4.5l-5 3m0-3l5 3m2.978-9.455h.022c2.485 0 4.5 2.03 4.5 4.534A4.53 4.53 0 0 1 18.5 20m-1.022-8.955a6 6 0 0 0 .022-.504C17.5 7.481 15.038 5 12 5c-2.877 0-5.238 2.225-5.48 5.06m10.958.985c-.083.924-.501 1.718-.978 2.455m-9.98-3.44C3.984 10.303 2 12.456 2 15.075a5.04 5.04 0 0 0 3.5 4.807m1.02-9.822q.237-.023.48-.023c1.126 0 2.165.375 3 1.008"></svg:path><svg:path d="M10 5.138a4.1 4.1 0 0 0-.466-1.253A4.03 4.03 0 0 0 7.136 2a3.18 3.18 0 0 1-1.547 3.138a3.12 3.12 0 0 1-3.465-.216a4.1 4.1 0 0 0 .418 3.04a4.02 4.02 0 0 0 4.594 1.885"></svg:path></svg:g>`,
})
export class HugeiconsMoonCloudMidSnowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
