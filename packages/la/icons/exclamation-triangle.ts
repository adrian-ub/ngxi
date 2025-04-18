import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laExclamationTriangleIcon],svg[la-exclamation-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 3.219l-.875 1.5l-12 20.781l-.844 1.5H29.72l-.844-1.5l-12-20.781zm0 4L26.25 25H5.75zM15 14v6h2v-6zm0 7v2h2v-2z"></svg:path>`,
})
export class LaExclamationTriangleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
