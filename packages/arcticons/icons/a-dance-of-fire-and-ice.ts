import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsADanceOfFireAndIceIcon],svg[arcticons-a-dance-of-fire-and-ice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.078 18.643l.002-.005q0-.004.003-.008c4.262-13.867 19.17-2.02 19.17-2.02h.005S33.757 5.5 19.773 5.5C9.13 5.5 6.589 11.932 5.982 15.007a6.8 6.8 0 0 0-.198 1.603a6.802 6.802 0 0 0 13.294 2.033M42.216 31.39a6.802 6.802 0 0 0-13.294-2.032h0l-.002.004q0 .004-.003.008c-4.262 13.867-19.17 2.02-19.17 2.02h-.005S14.405 42.5 28.227 42.5c10.643 0 13.184-6.432 13.791-9.507a6.8 6.8 0 0 0 .198-1.603"></svg:path>`,
})
export class ArcticonsADanceOfFireAndIceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
