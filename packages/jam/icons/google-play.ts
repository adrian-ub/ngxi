import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGooglePlayIcon],svg[jam-google-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.625 9.267l-3.635-2.1L11 10.061l2.733 2.644l3.892-2.25a.68.68 0 0 0 .342-.593a.68.68 0 0 0-.342-.595M13.373 6.81l-4-2.312L.607 0l9.901 9.584zM.752 19.98l8.636-4.763l3.728-2.155l-2.608-2.524zM.022.388l-.01 19.355l10.003-9.682z"></svg:path>`,
})
export class JamGooglePlayIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
