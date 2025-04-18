import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardCircleEditIcon],svg[hugeicons-dashboard-circle-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.25 10.5a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5M17.75 22a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5m-11.5 0a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5M20.868 2.439l.692.692a1.5 1.5 0 0 1 0 2.122l-3.627 3.695a2 2 0 0 1-1.047.552l-2.248.488a.5.5 0 0 1-.595-.593l.478-2.236a2 2 0 0 1 .552-1.047l3.674-3.673a1.5 1.5 0 0 1 2.12 0" color="currentColor"></svg:path>`,
})
export class HugeiconsDashboardCircleEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
