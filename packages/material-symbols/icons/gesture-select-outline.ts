import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGestureSelectOutlineIcon],svg[material-symbols-gesture-select-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12v-2h2v2zm20 0v-2h2v2zM1 8V6h2v2zm20 0V6h2v2zM1 4V2h2v2zm4 8v-2h2v2zm12 0v-2h2v2zm4-8V2h2v2zM5 4V2h2v2zm4 0V2h2v2zm4 0V2h2v2zm4 0V2h2v2zm-5.175 19q-.6 0-1.15-.225t-.975-.65L4.6 17l.825-.85q.35-.35.85-.475t1 0l1.725.5V8q0-.425.288-.712T10 7t.713.288T11 8v10.825l-2.45-.7l2.575 2.575q.15.15.325.225t.375.075H16q.825 0 1.413-.587T18 19v-4q0-.425.288-.712T19 14t.713.288T20 15v4q0 1.65-1.175 2.825T16 23zM12 16v-4q0-.425.288-.712T13 11t.713.288T14 12v4zm3 0v-3q0-.425.288-.712T16 12t.713.288T17 13v3zm1 5h-4.875z"></svg:path>`,
})
export class MaterialSymbolsGestureSelectOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
