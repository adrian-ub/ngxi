import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNetworkDuotoneIcon],svg[ph-network-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 40v32a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M80 168H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8m128 0h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M232 112h-96V88h8a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v24H24a8 8 0 0 0 0 16h32v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h112v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h32a8 8 0 0 0 0-16M112 40h32v32h-32ZM80 208H48v-32h32Zm128 0h-32v-32h32Z"></svg:path></svg:g>`,
})
export class PhNetworkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
