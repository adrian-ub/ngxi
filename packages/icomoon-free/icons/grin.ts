import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeGrinIcon],svg[icomoon-free-grin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13M3 8v1c0 2.2 1.8 4 4 4h2c2.2 0 4-1.8 4-4V8zm3 3.828a3 3 0 0 1-1.118-.71A2.98 2.98 0 0 1 4 9h2zM9 12H7V9h2zm2.118-.882a3 3 0 0 1-1.118.71V9h2c0 .797-.313 1.549-.882 2.118M3.521 6c.153 0 .283-.11.308-.261c.096-.573.589-.989 1.171-.989s1.074.416 1.171.989a.312.312 0 0 0 .616 0a1.815 1.815 0 0 0-1.788-2.115a1.815 1.815 0 0 0-1.788 2.115a.31.31 0 0 0 .308.261zm6 0c.153 0 .283-.11.308-.261c.096-.573.589-.989 1.171-.989s1.074.416 1.171.989a.312.312 0 0 0 .616 0a1.815 1.815 0 0 0-1.788-2.115a1.815 1.815 0 0 0-1.788 2.115a.31.31 0 0 0 .308.261z"></svg:path>`,
})
export class IcomoonFreeGrinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
