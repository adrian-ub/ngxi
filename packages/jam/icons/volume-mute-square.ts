import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamVolumeMuteSquareIcon],svg[jam-volume-mute-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm11.658 8.057l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707l-.707-.707a1 1 0 1 1 1.414-1.415l.707.708l.707-.708a1 1 0 0 1 1.414 1.415zm-10.376 3.23a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2h1.005L8.11 5.078a2 2 0 0 1 1.368-.54h.204a1.6 1.6 0 0 1 1.6 1.6v7.8a1.6 1.6 0 0 1-1.6 1.6h-.204a2 2 0 0 1-1.368-.542l-1.823-1.709zm1.796-4.5H5.282v2.5h1.796l2.204 2.067V6.72z"></svg:path>`,
})
export class JamVolumeMuteSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
