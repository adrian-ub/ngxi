import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVideoSwitchOutlineIcon],svg[mdi-video-switch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13h4v2l3-3l-3-3v2H8V9l-3 3l3 3zm10-3.5V6c0-.6-.5-1-1-1H3c-.5 0-1 .4-1 1v12c0 .5.5 1 1 1h14c.5 0 1-.5 1-1v-3.5l4 4v-13zM16 17H4V7h12z"></svg:path>`,
})
export class MdiVideoSwitchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
