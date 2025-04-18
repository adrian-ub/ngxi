import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilDoubleQuoteSansLeftIcon],svg[cil-double-quote-sans-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 246.857V16H16v400h38.4ZM48 48h152v185.143L48 377.905Zm232 368h38.4L496 246.857V16H280Zm32-368h152v185.143L312 377.905Z"></svg:path>`,
})
export class CilDoubleQuoteSansLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
