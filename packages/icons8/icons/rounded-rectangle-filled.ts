import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8RoundedRectangleFilledIcon],svg[icons8-rounded-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 6H8c-2.8 0-5 2.2-5 5v10c0 2.8 2.2 5 5 5h16c2.8 0 5-2.2 5-5V11c0-2.8-2.2-5-5-5"></svg:path>`,
})
export class Icons8RoundedRectangleFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
