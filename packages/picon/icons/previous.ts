import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPreviousIcon],svg[picon-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V0H1v8m2-4l4-4v8"></svg:path>`,
})
export class PiconPreviousIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
