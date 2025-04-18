import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconPrimitiveSquareIcon],svg[codicon-primitive-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.5 4l.5-.5h8l.5.5v8l-.5.5H4l-.5-.5zm1 .5v7h7v-7z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconPrimitiveSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
