import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlinePlaylistAddCheckCircleIcon],svg[ic-outline-playlist-add-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m2 8H7v2h7zm0-3H7v2h7zm-7 8h3v-2H7zm12-1.59L17.59 12l-3.54 3.54l-1.41-1.41l-1.41 1.41l2.83 2.83z"></svg:path>`,
})
export class IcOutlinePlaylistAddCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
