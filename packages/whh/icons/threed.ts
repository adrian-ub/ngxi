import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhThreedIcon],svg[whh-threed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 1024L0 768V256L480 0l480 256v512zm337-380L512 493V160q0-13-9.5-22.5T480 128t-22.5 9.5T448 160v333L143 644q-11 7-14.5 20t3 24t19 14.5T174 700l306-152l306 152q11 6 23.5 2.5t19-14.5t3-24t-14.5-20"></svg:path>`,
})
export class WhhThreedIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
