import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationHeartIcon],svg[foundation-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M67.607 13.462A22.1 22.1 0 0 0 50 22.136a22.1 22.1 0 0 0-17.61-8.674c-12.266 0-22.283 10.013-22.33 22.32c-.046 13.245 6.359 21.054 11.507 27.331l1.104 1.349c6.095 7.515 24.992 21.013 25.792 21.584a2.65 2.65 0 0 0 3.077 0c.8-.571 19.697-14.069 25.792-21.584l1.103-1.349c5.147-6.277 11.553-14.086 11.507-27.331c-.048-12.307-10.066-22.32-22.335-22.32"></svg:path>`,
})
export class FoundationHeartIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
