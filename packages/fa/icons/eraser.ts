import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faEraserIcon],svg[fa-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m896 1152l336-384H464l-336 384zM1909 75q15 34 9.5 71.5T1888 212L992 1236q-38 44-96 44H128q-38 0-69.5-20.5T11 1205q-15-34-9.5-71.5T32 1068L928 44q38-44 96-44h768q38 0 69.5 20.5T1909 75"></svg:path>`,
})
export class FaEraserIcon {
  readonly viewBox = input("0 0 1920 1280")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
