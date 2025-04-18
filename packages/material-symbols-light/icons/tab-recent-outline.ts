import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabRecentOutlineIcon],svg[material-symbols-light-tab-recent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22q-1.671 0-2.835-1.164Q14 19.67 14 18t1.165-2.835T18 14t2.836 1.165T22 18t-1.164 2.836T18 22m1.65-1.804l.546-.546l-1.811-1.811v-2.723h-.77v3.046zM13.77 9.04H20v3.28q.28.079.521.191q.24.113.479.265v-6.16q0-.69-.462-1.152T19.385 5H4.615q-.69 0-1.152.463T3 6.616v10.769q0 .69.463 1.153T4.615 19h7.474q-.055-.244-.072-.494T12 18H4.616q-.231 0-.424-.192T4 17.384V6.616q0-.231.192-.424T4.615 6h9.154zM4 17.385V18V6z"></svg:path>`,
})
export class MaterialSymbolsLightTabRecentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
