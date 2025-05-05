import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUpmostIcon],svg[picon-upmost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 6l2-2l2 2l1-1l-3-3l-3 3m0-3h6V1H1"></svg:path>`,
})
export class PiconUpmostIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
