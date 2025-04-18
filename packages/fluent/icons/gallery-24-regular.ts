import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGallery24RegularIcon],svg[fluent-gallery-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25zm2.25-.75a.75.75 0 0 0-.75.75v6h6.75V4.5h-6zm7.5 0v6.75h6.75v-6a.75.75 0 0 0-.75-.75h-6zm6.75 8.25h-6.75v6.75h6a.75.75 0 0 0 .75-.75v-6zm-8.25 6.75v-6.75H4.5v6c0 .414.336.75.75.75h6z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentGallery24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
