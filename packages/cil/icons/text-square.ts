import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilTextSquareIcon],svg[cil-text-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 496h480V16H16ZM48 48h416v416H48Z"></svg:path><svg:path fill="currentColor" d="M112 176h32v-32h80v224h-32v32h128v-32h-32V144h80v32h32v-64H112z"></svg:path>`,
})
export class CilTextSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
