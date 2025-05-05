import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconStackIcon],svg[picon-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 0l4 2l-4 2l-4-2m0 1l4 2l4-2v1L4 6L0 4m0 1l4 2l4-2v1L4 8L0 6"></svg:path>`,
})
export class PiconStackIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
