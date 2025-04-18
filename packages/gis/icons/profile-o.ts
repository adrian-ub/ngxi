import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisProfileOIcon],svg[gis-profile-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 24v69h85v-5H12V24Z" color="currentColor"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M68.219 33.463a2.5 2.5 0 0 0-1.787.816l-20.77 22.832l-11.156-7.238a2.5 2.5 0 0 0-3.461.742l-14.53 22.53c-1.816 2.804 2.4 5.522 4.204 2.709l13.17-20.422l10.834 7.03a2.5 2.5 0 0 0 3.21-.415l20.061-22.053l19.938 29.408c1.85 2.854 6.103-.028 4.138-2.804l-21.72-32.04a2.5 2.5 0 0 0-2.131-1.095" color="currentColor"></svg:path><svg:path fill="currentColor" d="M2.394 17.004v-2.71l7.813-7.622l-7.252.074V3.863h12.634v2.462l-7.9 7.709l8.346-.087v3.057z"></svg:path>`,
})
export class GisProfileOIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
