import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsEIcon],svg[ls-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M559 399H69v2c0 113 100 204 215 204c82 0 152-47 186-115l61 29c-44 90-137 152-246 152C133 671 0 551 0 401c0-42 11-82 29-117c47-91 147-153 256-153c130 0 238 89 267 208c4 19 7 40 7 60M80 339h400c-27-82-104-142-196-142c-82 0-158 47-194 116c-4 8-7 17-10 26"></svg:path>`,
})
export class LsEIcon {
  readonly viewBox = input("0 0 559 671")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
