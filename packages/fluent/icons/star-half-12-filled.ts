import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarHalf12FilledIcon],svg[fluent-star-half-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1.1a.79.79 0 0 0-.717.446L4.172 3.798l-2.486.361a.8.8 0 0 0-.444 1.365l1.8 1.753l-.425 2.476a.8.8 0 0 0 1.16.844L6 9.428z"></svg:path>`,
})
export class FluentStarHalf12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
