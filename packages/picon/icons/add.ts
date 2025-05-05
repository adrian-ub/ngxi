import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAddIcon],svg[picon-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6H2V4h6M4 8V2h2v6"></svg:path>`,
})
export class PiconAddIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
