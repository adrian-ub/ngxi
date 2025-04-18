import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamClearFormatIcon],svg[jam-clear-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.326 2L3.95 9.309a1 1 0 1 1-1.902-.618L4.223 2H1a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2zm3.33 6.243l.708.707a1 1 0 1 1-1.414 1.414l-.707-.707l-.707.707A1 1 0 0 1 6.12 8.95l.707-.707l-.707-.707A1 1 0 0 1 7.536 6.12l.707.707l.707-.707a1 1 0 1 1 1.414 1.415z"></svg:path>`,
})
export class JamClearFormatIcon {
  readonly viewBox = input("-6.5 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
