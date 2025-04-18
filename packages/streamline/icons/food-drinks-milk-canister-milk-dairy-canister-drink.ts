import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksMilkCanisterMilkDairyCanisterDrinkIcon],svg[streamline-food-drinks-milk-canister-milk-dairy-canister-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11 7.5l-1.5-2h-5L3 7.5v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1Zm0 0l2.5-2M3 7.5l-2.5-2m4-5h5a1 1 0 0 1 1 1V3h0h-7h0V1.5a1 1 0 0 1 1-1Zm0 2.5v2.5m5-2.5v2.5"></svg:path>`,
})
export class StreamlineFoodDrinksMilkCanisterMilkDairyCanisterDrinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
