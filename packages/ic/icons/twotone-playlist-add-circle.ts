import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotonePlaylistAddCircleIcon],svg[ic-twotone-playlist-add-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8M7 7h7v2H7zm3 8H7v-2h3zm-3-3v-2h7v2zm10 3v2h-2v-2h-2v-2h2v-2h2v2h2v2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m2-10H7v2h7zm0-3H7v2h7zm-7 8h3v-2H7zm12-2v2h-2v2h-2v-2h-2v-2h2v-2h2v2z"></svg:path>`,
})
export class IcTwotonePlaylistAddCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
