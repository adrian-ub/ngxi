import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsGeneralSurgeryOutlineIcon],svg[healthicons-general-surgery-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M40 8H8v32h32zM8 6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"></svg:path><svg:path d="M10 34h10v2H10zm18 0h4v2h-4zm-6 0h4v2h-4zm12 0h4v2h-4zm-17.172-6h4.724a4 4 0 0 0 2.798-1.142L28 23.284v-.456A4 4 0 0 1 29.172 20l1.689-1.69l-2.606-1.736zM12 30l16-16l6 4l-3.414 3.414A2 2 0 0 0 30 22.828v.456a2 2 0 0 1-.6 1.43l-3.65 3.573A6 6 0 0 1 21.551 30z"></svg:path><svg:path d="M26.707 21.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0m10-13.185l-7.6 7.6l-1.414-1.415l7.6-7.6zm1.5 4.285a1 1 0 0 1 0 1.414l-5.5 5.5l-1.414-1.415l5.5-5.5a1 1 0 0 1 1.414 0"></svg:path></svg:g>`,
})
export class HealthiconsGeneralSurgeryOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
