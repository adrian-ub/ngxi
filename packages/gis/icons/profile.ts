import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisProfileIcon],svg[gis-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 24v69h85v-5H12V24Z" color="currentColor"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M68.219 33.463a2.5 2.5 0 0 0-1.787.816l-20.77 22.832l-11.156-7.238a2.5 2.5 0 0 0-3.461.742l-14.53 22.53V84H92l.07-17.402l-21.72-32.04a2.5 2.5 0 0 0-2.131-1.095" color="currentColor"></svg:path><svg:path fill="currentColor" d="M2.394 17.004v-2.71l7.813-7.622l-7.252.074V3.863h12.634v2.462l-7.9 7.709l8.346-.087v3.057z"></svg:path>`,
})
export class GisProfileIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
