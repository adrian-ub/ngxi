import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilShutterIcon],svg[uil-shutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.07 4.93A10 10 0 1 0 4.93 19.07A10 10 0 1 0 19.07 4.93M18.23 7h-5.47l2.35-2.35A8.14 8.14 0 0 1 18.23 7M9 4.6a8.15 8.15 0 0 1 3.87-.54L9 7.93ZM7 5.77v5.47L5.19 9.43l-.54-.54A8.14 8.14 0 0 1 7 5.77M4.6 15a8.1 8.1 0 0 1-.54-3.87L7.93 15Zm1.17 2h5.47l-2.35 2.35A8.14 8.14 0 0 1 5.77 17M15 19.4a8.1 8.1 0 0 1-3.87.54L15 16.07Zm0-6.16L13.24 15h-2.49L9 13.24v-2.48L10.76 9h2.48L15 10.76Zm2 5v-5.48l2.35 2.35A8.14 8.14 0 0 1 17 18.23ZM16.07 9h3.33a8.1 8.1 0 0 1 .54 3.87Z"></svg:path>`,
})
export class UilShutterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
