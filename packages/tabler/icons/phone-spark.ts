import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPhoneSparkIcon],svg[tabler-phone-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.584 19.225A16 16 0 0 1 3 6a2 2 0 0 1 2-2h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l.65.26M19 22.5a4.75 4.75 0 0 1 3.5-3.5a4.75 4.75 0 0 1-3.5-3.5a4.75 4.75 0 0 1-3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"></svg:path>`,
})
export class TablerPhoneSparkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
