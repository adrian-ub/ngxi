import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsDonateHeartIcon],svg[bxs-donate-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.726 13.02L14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A2 2 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a3 3 0 0 0-2.822.504m1.532-5.63c.451-.465.73-1.108.73-1.818s-.279-1.353-.73-1.818A2.45 2.45 0 0 0 17.494 3S16.25 2.997 15 4.286C13.75 2.997 12.506 3 12.506 3a2.45 2.45 0 0 0-1.764.753c-.451.466-.73 1.108-.73 1.818s.279 1.354.73 1.818L15 12z"></svg:path>`,
})
export class BxsDonateHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
