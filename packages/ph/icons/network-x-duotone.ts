import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNetworkXDuotoneIcon],svg[ph-network-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 40v32a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M80 168H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M232 112h-96V88h8a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v24H24a8 8 0 0 0 0 16h32v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h112v16a8 8 0 0 0 16 0v-16h32a8 8 0 0 0 0-16M112 40h32v32h-32ZM80 208H48v-32h32Zm141.65-34.34L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32Z"></svg:path></svg:g>`,
})
export class PhNetworkXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
