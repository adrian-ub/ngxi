import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBrainWarningIcon],svg[iconoir-brain-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 14a3 3 0 1 0 1 5.83"></svg:path><svg:path d="M4.264 15.605a4 4 0 0 1-.874-6.636m.03-.081A2.5 2.5 0 0 1 7 5.5m5-1a2.5 2.5 0 1 0-4.762 1.065M8 20a2 2 0 1 0 4 0m5-6a3 3 0 1 1-1 5.83"></svg:path><svg:path d="M19.736 15.605a4 4 0 0 0 .874-6.636m-.03-.081A2.5 2.5 0 0 0 17 5.5m-5-1a2.5 2.5 0 1 1 4.762 1.065M16 20a2 2 0 1 1-4 0m0-12v4m0 4.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirBrainWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
