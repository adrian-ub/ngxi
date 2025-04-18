import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhotoFilter24RegularIcon],svg[fluent-photo-filter-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2a7.5 7.5 0 0 1 7.179 5.321a7.5 7.5 0 1 1-9.357 9.358A7.5 7.5 0 0 1 9.5 2m7.486 7.038l.01.22L17 9.5a7.5 7.5 0 0 1-7.962 7.486a6 6 0 1 0 7.947-7.948M9.5 3.5a6 6 0 0 0-2.486 11.463l-.01-.22L7 14.5a7.5 7.5 0 0 1 7.962-7.486A6 6 0 0 0 9.5 3.5"></svg:path>`,
})
export class FluentPhotoFilter24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
