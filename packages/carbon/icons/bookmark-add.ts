import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBookmarkAddIcon],svg[carbon-bookmark-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 16v10.752l-7.096-3.59l-.904-.457l-.9.456L8 26.748V4h10V2H8a2 2 0 0 0-2 2v26l10-5.054L26 30V16Z"></svg:path><svg:path fill="currentColor" d="M26 6V2h-2v4h-4v2h4v4h2V8h4V6z"></svg:path>`,
})
export class CarbonBookmarkAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
