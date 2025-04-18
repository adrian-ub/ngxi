import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBrushAltIcon],svg[cil-brush-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 256v240h400V256a48.055 48.055 0 0 0-48-48h-86.617l13.075-106.263l.068-.677a78.777 78.777 0 1 0-157.052 0l.027.338L190.617 208H104a48.055 48.055 0 0 0-48 48m368 208H88V320h336ZM226.8 240L209.348 98.192a46.777 46.777 0 1 1 93.3 0L285.205 240H408a16.02 16.02 0 0 1 16 16v32H88v-32a16.02 16.02 0 0 1 16-16Z"></svg:path>`,
})
export class CilBrushAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
