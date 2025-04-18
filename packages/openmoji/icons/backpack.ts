import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBackpackIcon],svg[openmoji-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#D22F27" d="M56 31.083c0-11.045-8.954-20-20-20s-20 8.955-20 20v33.875h40z"></svg:path><svg:path fill="#EA5A47" d="M51.647 52.965v7.621H20.354v-7.492v1.927v-24.416c0-8.641 7.005-15.647 15.646-15.647s15.647 7.006 15.647 15.647V55.02"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M56 31.083c0-11.045-8.954-20-20-20s-20 8.955-20 20v33.875h40z"></svg:path><svg:path d="M51.647 52.965v7.621H20.354v-7.492v1.927v-24.416c0-8.641 7.005-15.647 15.646-15.647s15.647 7.006 15.647 15.647V55.02m-27.743-5.565h22.994M31 9a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class OpenmojiBackpackIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
