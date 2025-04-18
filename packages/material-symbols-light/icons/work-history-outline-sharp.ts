import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWorkHistoryOutlineSharpIcon],svg[material-symbols-light-work-history-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19V8zm-1 1V7h6V4h6v3h6v5.814q-.238-.152-.482-.265t-.518-.21V8H4v11h8.075q.056.256.118.508t.155.492zm7-13h4V5h-4zm8 15q-1.671 0-2.835-1.164Q14 19.67 14 18t1.165-2.835T18 14t2.836 1.165T22 18t-1.164 2.836T18 22m.385-4.154v-2.73h-.77v3.046l2.035 2.034l.546-.546z"></svg:path>`,
})
export class MaterialSymbolsLightWorkHistoryOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
