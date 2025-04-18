import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBucketIcon],svg[mdi-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v3h-1l-2.5 14h-11L4 7H3z"></svg:path>`,
})
export class MdiBucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
