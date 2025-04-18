import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddHomeIcon],svg[material-symbols-add-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 19h1v-2.5H21v-1h-2.5V13h-1v2.5H15v1h2.5zm.5 2q-2.075 0-3.537-1.463T13 16t1.463-3.537T18 11t3.538 1.463T23 16t-1.463 3.538T18 21M4 19V7l8-6l8 6v2.3q-.5-.15-1-.225T18 9q-2.925 0-4.962 2.038T11 16q0 .8.163 1.55t.512 1.45z"></svg:path>`,
})
export class MaterialSymbolsAddHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
