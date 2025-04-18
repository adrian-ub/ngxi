import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitCheckSquareIcon],svg[uit-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.847 15.754a.5.5 0 0 0 .707 0l6.8-6.8a.5.5 0 0 0-.708-.708L10.2 14.693l-2.847-2.846a.5.5 0 0 0-.707.707zM21.5 2h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5M21 21H3V3h18z"></svg:path>`,
})
export class UitCheckSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
