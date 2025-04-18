import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCallLogOutlineSharpIcon],svg[material-symbols-call-log-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.95 22q-3.125 0-6.187-1.35T7.2 16.8t-3.85-5.55T2 5.05V4h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T12.1 18l2.9-2.9l5 1.025V22zM5.025 10l1.65-1.65L6.25 6H4.025q.125 1.125.375 2.113T5.025 10m8.95 8.95q1 .425 2.013.675T18 19.95v-2.2l-2.35-.475zM12 4V2h10v2zm0 4V6h10v2zm0 4v-2h10v2z"></svg:path>`,
})
export class MaterialSymbolsCallLogOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
