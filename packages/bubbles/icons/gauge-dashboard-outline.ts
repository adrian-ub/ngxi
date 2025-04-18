import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesGaugeDashboardOutlineIcon],svg[bubbles-gauge-dashboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 4.5A11.336 11.336 0 0 0 .75 15.923V18a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5v-2.08C23.297 9.66 18.26 4.547 12 4.5" clip-rule="evenodd"></svg:path><svg:path d="M9 19.5v-.75a3 3 0 1 1 6 0v.75m-.75-10.497L12 15.753M4.875 15a.375.375 0 1 0 0 .75a.375.375 0 0 0 0-.75m1.5-3.747a.375.375 0 1 0 0 .75a.375.375 0 0 0 0-.75M19.125 15a.375.375 0 1 0 0 .75a.375.375 0 0 0 0-.75m-1.5-3.747a.375.375 0 1 0 0 .75a.375.375 0 0 0 0-.75m-8.25-3a.375.375 0 1 0 0 .75a.375.375 0 0 0 0-.75"></svg:path></svg:g>`,
})
export class BubblesGaugeDashboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
