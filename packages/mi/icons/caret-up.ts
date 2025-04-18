import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miCaretUpIcon],svg[mi-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 14l5-6l5 6z"></svg:path>`,
})
export class MiCaretUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
