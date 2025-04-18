import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCaretLeftIcon],svg[cil-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400.358 496h-36.45L96 256.286L365.811 16.333h34.547ZM144.071 256.358l224.287 200.684V56.892Z"></svg:path>`,
})
export class CilCaretLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
