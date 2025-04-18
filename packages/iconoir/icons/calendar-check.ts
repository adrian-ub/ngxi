import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCalendarCheckIcon],svg[iconoir-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 21H5a2 2 0 0 1-2-2v-9h18v5M15 4V2m0 2v2m0-2h-4.5M3 10V6a2 2 0 0 1 2-2h2m0-2v4m14 4V6a2 2 0 0 0-2-2h-.5M16 20l2 2l4-4"></svg:path>`,
})
export class IconoirCalendarCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
