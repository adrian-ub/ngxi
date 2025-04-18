import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNatIcon],svg[material-symbols-nat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15q-1.25 0-2.125-.875T1 12t.875-2.125T4 9q.975 0 1.738.563T6.8 11H11v2H6.8q-.3.875-1.062 1.438T4 15m0-2q.425 0 .713-.288T5 12t-.288-.712T4 11t-.712.288T3 12t.288.713T4 13m1 9v-2q3.325 0 5.663-2.337T13 12t-2.337-5.663T5 4V2q3.925 0 6.75 2.6t3.2 6.4h4.2L17.6 9.4L19 8l4 4l-4 4l-1.4-1.4l1.55-1.6h-4.2q-.375 3.8-3.2 6.4T5 22"></svg:path>`,
})
export class MaterialSymbolsNatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
