import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMedicationTimeIcon],svg[icon-park-twotone-medication-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMedicationTime0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="24" height="10" x="9" y="5" fill="#555" stroke-linecap="round" stroke-linejoin="round" rx="4"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 5v8m-6-8v8m12-8v8m0 27H8a2 2 0 0 1-2-2V17a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v9m-2 6v4h4"></svg:path><svg:circle cx="35" cy="35" r="9"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 5h16M13 15h16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMedicationTime0)"></svg:path>`,
})
export class IconParkTwotoneMedicationTimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
