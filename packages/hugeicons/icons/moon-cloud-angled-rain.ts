import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoonCloudAngledRainIcon],svg[hugeicons-moon-cloud-angled-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12.504 16l-1 2m5.5-2l-1 2m-2.5 2l-1 2m-4.5-6l-1 2m2 2l-1 2m9.474-11.024h.022c2.485 0 4.5 2.006 4.5 4.481c0 1.563-.79 2.733-2 3.543m-2.522-8.024q.021-.246.022-.498C17.5 7.452 15.038 5 12 5c-2.877 0-5.238 2.2-5.48 5.002m10.958.974a5.4 5.4 0 0 1-.578 1.991M6.52 10.003C3.984 10.242 2 12.37 2 14.96c0 1.63.786 3.11 2 4.041m2.52-8.998q.237-.022.48-.022c1.126 0 2.165.37 3 .996"></svg:path><svg:path d="M10 5.138a4.1 4.1 0 0 0-.466-1.253A4.03 4.03 0 0 0 7.136 2a3.18 3.18 0 0 1-1.547 3.138a3.12 3.12 0 0 1-3.465-.216a4.1 4.1 0 0 0 .418 3.04a4.02 4.02 0 0 0 4.594 1.885"></svg:path></svg:g>`,
})
export class HugeiconsMoonCloudAngledRainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
