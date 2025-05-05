import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTrashIcon],svg[picon-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v3h1V4M2 4v3h1V4M0 2V1h2V0h4v1h2v1M7 8H1V3h6"></svg:path>`,
})
export class PiconTrashIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
