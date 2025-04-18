import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMeasurement1FilledIcon],svg[tdesign-measurement-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2H2v4.5h2.004v2H2V11h2.004v2H2v2.5h2.004v2H2V22h4.5v-1.967h2V22H11v-1.967h2V22h2.5v-1.967h2V22H22V12H12z"></svg:path>`,
})
export class TdesignMeasurement1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
