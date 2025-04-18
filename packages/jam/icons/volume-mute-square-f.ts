import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamVolumeMuteSquareFIcon],svg[jam-volume-mute-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.658 10.057l.707-.707a1 1 0 1 0-1.414-1.415l-.707.708l-.707-.708a1 1 0 0 0-1.414 1.415l.707.707l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707l.707.707a1 1 0 0 0 1.414-1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m1.282 13.287h1.005l1.823 1.71a2 2 0 0 0 1.368.54h.204a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.204a2 2 0 0 0-1.368.541l-1.823 1.71H5.282a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm1.796-4.5L9.282 6.72v6.634l-2.204-2.067H5.282v-2.5z"></svg:path>`,
})
export class JamVolumeMuteSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
