import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSubtuneIcon],svg[arcticons-subtune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.323 22.924c0-8.674 7.032-15.705 15.705-15.705h0c8.674 0 15.706 7.031 15.706 15.705h0m-25.985.988l.053 14.87H7.72c-1.137 0-2.219-.516-2.219-1.575V26.1c0-1.172.875-2.189 1.922-2.189zm20.422 0l-.053 14.87h6.46c.976 0 1.922-.592 1.922-1.549V26.021c0-1.055-.618-2.109-1.682-2.109zm5.563-.988v.988m-31.411-.988v.988"></svg:path><svg:circle cx="22.038" cy="33.523" r="3.02" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.032 31.254l-.003-9.077l4.59 4.645c1.433 1.449 1.005 3.951-.56 5.259"></svg:path>`,
})
export class ArcticonsSubtuneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
