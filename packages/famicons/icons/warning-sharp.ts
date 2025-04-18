import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsWarningSharpIcon],svg[famicons-warning-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M479 447.77L268.43 56.64a8 8 0 0 0-14.09 0L43.73 447.77a8 8 0 0 0 7.05 11.79H472a8 8 0 0 0 7-11.79m-197.62-36.29h-40v-40h40Zm-4-63.92h-32l-6-160h44Z"></svg:path>`,
})
export class FamiconsWarningSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
