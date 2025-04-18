import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonJoinInnerIcon],svg[carbon-join-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a9.9 9.9 0 0 0-4 .842a9.999 9.999 0 1 0 0 18.318A9.998 9.998 0 1 0 20 6m-8 18a8 8 0 1 1 1.757-15.798a9.973 9.973 0 0 0 0 15.598A8 8 0 0 1 12 24m8 0a8 8 0 0 1-1.757-.2a9.973 9.973 0 0 0 0-15.599A7.997 7.997 0 1 1 20 24"></svg:path>`,
})
export class CarbonJoinInnerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
