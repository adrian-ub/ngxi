import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsParagraphIcon],svg[majesticons-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 5h-3m-5 0h5m-5 0v10m0-10h-1c-1.667 0-5 1-5 5s3.333 5 5 5h1m0 4v-4m5 4V5"></svg:path>`,
})
export class MajesticonsParagraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
