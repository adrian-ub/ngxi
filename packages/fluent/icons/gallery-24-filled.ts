import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGallery24FilledIcon],svg[fluent-gallery-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M5.25 3A2.25 2.25 0 0 0 3 5.25v6h8.25V3h-6z" fill="currentColor"></svg:path><svg:path d="M12.75 3v8.25H21v-6A2.25 2.25 0 0 0 18.75 3h-6z" fill="currentColor"></svg:path><svg:path d="M21 12.75h-8.25V21h6A2.25 2.25 0 0 0 21 18.75v-6z" fill="currentColor"></svg:path><svg:path d="M11.25 21v-8.25H3v6A2.25 2.25 0 0 0 5.25 21h6z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentGallery24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
