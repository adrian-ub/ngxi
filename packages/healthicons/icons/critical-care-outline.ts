import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCriticalCareOutlineIcon],svg[healthicons-critical-care-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 13a1 1 0 0 0-1 1v15.96a1 1 0 0 0 1 1h10v2.142h-4.538v2h11.077v-2H25v-2.143h10a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1zm9.907 2.694l-3.403 5.985h-5.658v1.987h6.833l1.619-2.847l1.891 6.548l4.43-5.633h4.53a1 1 0 0 0 1.005-.993a1 1 0 0 0-1.005-.994h-5.513l-2.602 3.31z"></svg:path><svg:path d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm31 3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1z"></svg:path></svg:g>`,
})
export class HealthiconsCriticalCareOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
