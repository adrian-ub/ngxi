import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTrackpadInput3RoundedIcon],svg[material-symbols-trackpad-input-3-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14V9q0-.425.288-.712T19 8t.713.288T20 9v5h1q0-.425.288-.712T22 13t.713.288T23 14v4q0 1.65-1.175 2.825T19 22h-4.175q-.6 0-1.15-.225t-.975-.65L8.3 16.7q-.275-.275-.288-.687t.263-.713l.15-.15q.35-.35.85-.475t1 0l1.725.5V8q0-.425.288-.712T13 7t.713.288T14 8v6h1V7q0-.425.288-.712T16 6t.713.288T17 7v7zM4 19q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.425 0 .713.288T21 4t-.288.713T20 5H4v12h1.8q.425 0 .713.288T6.8 18t-.287.713T5.8 19z"></svg:path>`,
})
export class MaterialSymbolsTrackpadInput3RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
