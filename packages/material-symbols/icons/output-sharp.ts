import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOutputSharpIcon],svg[material-symbols-output-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v4h-2V5H5v14h14v-2h2v4zm14-4l-1.4-1.4l2.575-2.6H9v-2h9.175L15.6 8.4L17 7l5 5z"></svg:path>`,
})
export class MaterialSymbolsOutputSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
