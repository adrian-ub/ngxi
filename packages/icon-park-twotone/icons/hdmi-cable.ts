import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHdmiCableIcon],svg[icon-park-twotone-hdmi-cable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHdmiCable0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M4 16a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8.646c0 .818-.502 1.556-1.18 2.014c-1.219.825-3.026 2.49-3.622 5.352C38.973 33.093 38.105 34 37 34H11c-1.105 0-1.973-.907-2.198-1.988c-.596-2.863-2.403-4.527-3.623-5.352C4.502 26.202 4 25.464 4 24.646z"></svg:path><svg:path d="M14 28h20m-20 0v-3m7 3v-3m6 3v-3m7 3v-3m-23-5h2m6 0h2m6 0h2m6 0h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHdmiCable0)"></svg:path>`,
})
export class IconParkTwotoneHdmiCableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
