import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSwipeSharpIcon],svg[material-symbols-swipe-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7h-5V5.5h2.9q-1.65-1.45-3.675-2.225T12 2.5t-4.225.775T4.1 5.5H7V7H2V2h1.5v2.025q1.8-1.475 3.975-2.25T12 1t4.525.775t3.975 2.25V2H22zM10.575 22L4.6 16l1.575-1.625l2.825.8V6h2v8h1v-4h2v4h1v-3h2v3h1v-1h2v9z"></svg:path>`,
})
export class MaterialSymbolsSwipeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
