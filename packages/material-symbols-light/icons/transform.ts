import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTransformIcon],svg[material-symbols-light-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.692 21.923l-3.307-3.307l.707-.72l2.1 2.062v-3.785H9.423q-.69 0-1.153-.462t-.462-1.153v-5.77H3v-1h4.808V4.043l-2.1 2.062L5 5.384l3.308-3.307l3.308 3.308l-.708.719l-2.1-2.062v10.516q0 .23.192.423t.423.192H21v1h-4.808v3.785l2.1-2.062l.708.72zm-.5-8.75v-3.77q0-.23-.192-.422t-.423-.192h-3.77v-1h3.77q.69 0 1.153.462t.462 1.153v3.769z"></svg:path>`,
})
export class MaterialSymbolsLightTransformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
