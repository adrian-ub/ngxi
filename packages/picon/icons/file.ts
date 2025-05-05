import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFileIcon],svg[picon-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v2h2M1 8V0h4l2 2v6"></svg:path>`,
})
export class PiconFileIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
