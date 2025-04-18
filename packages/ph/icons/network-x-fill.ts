import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNetworkXFillIcon],svg[ph-network-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 120a8 8 0 0 1-8 8h-32v16a8 8 0 0 1-16 0v-16H72v32h8a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h8v-32H24a8 8 0 0 1 0-16h96V88h-8a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-8v24h96a8 8 0 0 1 8 8m-18.34 42.34a8 8 0 0 0-11.32 0L192 180.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L180.69 192l-18.35 18.34a8 8 0 0 0 11.32 11.32L192 203.31l18.34 18.35a8 8 0 0 0 11.32-11.32L203.31 192l18.35-18.34a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhNetworkXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
