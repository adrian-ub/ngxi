import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epMagicStickIcon],svg[ep-magic-stick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64h64v192h-64zm0 576h64v192h-64zM160 480v-64h192v64zm576 0v-64h192v64zM249.856 199.04l45.248-45.184L430.848 289.6L385.6 334.848L249.856 199.104zM657.152 606.4l45.248-45.248l135.744 135.744l-45.248 45.248zM114.048 923.2L68.8 877.952l316.8-316.8l45.248 45.248zM702.4 334.848L657.152 289.6l135.744-135.744l45.248 45.248z"></svg:path>`,
})
export class EpMagicStickIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
