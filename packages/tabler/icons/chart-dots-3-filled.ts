import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartDots3FilledIcon],svg[tabler-chart-dots-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a4 4 0 1 1-3.843 5.114L7.862 7.9a3 3 0 0 1-.094.257l6.446 4.431a3 3 0 1 1-.695 4.099l-3.527 1.058Q10 17.872 10 18a4 4 0 1 1-8 0l.005-.2a4 4 0 0 1 7.366-1.954l3.64-1.094l.01-.102q.023-.204.074-.4l-6.688-4.6A3 3 0 0 1 2 7l.005-.176a3 3 0 0 1 5.784-.931l6.312-.79A4 4 0 0 1 18 2"></svg:path>`,
})
export class TablerChartDots3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
