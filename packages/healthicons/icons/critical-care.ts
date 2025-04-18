import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCriticalCareIcon],svg[healthicons-critical-care-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm4 7a1 1 0 0 0-1 1v15.96a1 1 0 0 0 1 1h10v2.142h-4.538v2h11.077v-2H25v-2.143h10a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M13.846 21.679h5.658l3.403-5.985l2.127 7.363l2.602-3.31h5.513a1 1 0 0 1 1.005.994a1 1 0 0 1-1.005.993h-4.53l-4.43 5.633l-1.891-6.548l-1.62 2.847h-6.832z"></svg:path></svg:g>`,
})
export class HealthiconsCriticalCareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
