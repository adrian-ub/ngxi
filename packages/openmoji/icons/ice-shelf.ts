import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiIceShelfIcon],svg[openmoji-ice-shelf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M67 57V19.671l-4.361-.75l-3.601-.854l-5.899.354l-15.625-2.375l-12.583 3.459v16.5l2.667-2.25l1 5.375l2 1.875l1.125 2.666v4.542l3.541 2.917l.417 5.541z"></svg:path><svg:path fill="#92d3f5" d="M4 57h64v11H4z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m37.889 22.838l1.5 5.958l-1.5 5.219l1.5 2.906l1 6.25M67 34.432l-10.111-1.427l-5.25 1.666v4.875l1.5 4.75l-.25 4.125l-1.25 5.375l1.25 2.875M5 57h62"></svg:path><svg:path d="m60.264 39.296l1.125 4.75l-.945 5.011m-24.763 7.614l-.417-5.541l-3.541-2.917v-4.542l-1.125-2.666l-2-1.875l-1-5.375l-2.667 2.25v-16.5l12.583-3.459l15.625 2.375l5.899-.354l3.601.854l4.361.75"></svg:path></svg:g>`,
})
export class OpenmojiIceShelfIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
