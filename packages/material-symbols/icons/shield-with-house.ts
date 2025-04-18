import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShieldWithHouseIcon],svg[material-symbols-shield-with-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 9.55l7.25 5.625q-.725 1.975-2.087 3.563T14 21.25v-6.225h-4v6.225q-1.8-.925-3.162-2.512T4.75 15.175zm0-7.525l8 3V11.1q0 .5-.05.988t-.125.987L12 7.025l-7.825 6.05q-.1-.5-.137-.987T4 11.1V5.025z"></svg:path>`,
})
export class MaterialSymbolsShieldWithHouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
