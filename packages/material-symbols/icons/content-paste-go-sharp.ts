import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsContentPasteGoSharpIcon],svg[material-symbols-content-paste-go-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 21l-1.4-1.425L18.175 18H12v-2h6.175L16.6 14.4L18 13l4 4zm3-11h-2V5h-2v3H7V5H5v14h5v2H3V3h6.175q.275-.875 1.075-1.437T12 1q1 0 1.788.563T14.85 3H21zm-9-5q.425 0 .713-.288T13 4t-.288-.712T12 3t-.712.288T11 4t.288.713T12 5"></svg:path>`,
})
export class MaterialSymbolsContentPasteGoSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
