import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitYoutubeIcon],svg[formkit-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.5c-6.88 0-7 .62-7 5.5s.12 5.5 7 5.5s7-.62 7-5.5s-.12-5.5-7-5.5m2.24 5.74L7.1 8.74c-.28.13-.5-.02-.5-.33V5.59c0-.31.23-.46.5-.33l3.14 1.5c.28.13.28.35 0 .48"></svg:path>`,
})
export class FormkitYoutubeIcon {
  readonly viewBox = input("0 0 16 14")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
