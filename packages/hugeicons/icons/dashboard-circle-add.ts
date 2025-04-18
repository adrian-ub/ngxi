import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardCircleAddIcon],svg[hugeicons-dashboard-circle-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="6.25" cy="6.25" r="4.25"></svg:circle><svg:circle cx="17.75" cy="17.75" r="4.25"></svg:circle><svg:circle cx="6.25" cy="17.75" r="4.25"></svg:circle><svg:path d="M18 2v8m4-4h-8"></svg:path></svg:g>`,
})
export class HugeiconsDashboardCircleAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
