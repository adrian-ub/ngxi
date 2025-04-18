import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFormatPainterFilledIcon],svg[lsicon-format-painter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5h3.5a.5.5 0 0 1 .5.5V7H2V5.5a.5.5 0 0 1 .5-.5H6zM2 8v5.5a.5.5 0 0 0 .5.5h3v-3.5h1V14h1V9.5h1V14h1v-3.5h1V14h3a.5.5 0 0 0 .5-.5V8z"></svg:path>`,
})
export class LsiconFormatPainterFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
