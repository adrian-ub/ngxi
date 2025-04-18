import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineVolumeMuteIcon],svg[icon-park-outline-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipOVolumeMute0" width="13" height="13" x="30" y="18" maskUnits="userSpaceOnUse" style="mask-type:alpha"><svg:path fill="currentColor" d="M30 18h13v13H30z"></svg:path></svg:mask><svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:g stroke-linecap="round" mask="url(#ipOVolumeMute0)"><svg:path d="m40.735 20.286l-8.486 8.485m.001-8.485l8.485 8.485"></svg:path></svg:g><svg:path d="M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"></svg:path></svg:g>`,
})
export class IconParkOutlineVolumeMuteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
