import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonJoinFullIcon],svg[carbon-join-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M16 9.075a7.994 7.994 0 0 1 0 13.85a7.994 7.994 0 0 1 0-13.85m0-2.237a9.995 9.995 0 0 0 0 18.324a9.995 9.995 0 0 0 0-18.324"></svg:path><svg:path fill="currentColor" d="M10 16a10 10 0 0 1 6-9.162a10 10 0 1 0 0 18.324A10 10 0 0 1 10 16"></svg:path><svg:path fill="currentColor" d="M16 9.075a7.994 7.994 0 0 0 0 13.85a7.994 7.994 0 0 0 0-13.85"></svg:path><svg:path fill="currentColor" d="M20 6a10 10 0 0 0-4 .838a9.995 9.995 0 0 1 0 18.324A9.999 9.999 0 1 0 20 6"></svg:path>`,
})
export class CarbonJoinFullIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
