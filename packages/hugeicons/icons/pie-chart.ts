import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPieChartIcon],svg[hugeicons-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 15.828c-2.501 5.928-10.636 7.656-15.299 3.036C.63 14.334 2.045 6.13 8.057 3.5"></svg:path><svg:path d="M17.683 12.5c1.888 0 2.832 0 3.441-.845c.023-.032.06-.088.081-.121c.548-.887.266-1.568-.299-2.93a10.18 10.18 0 0 0-5.51-5.51c-1.362-.565-2.043-.847-2.93-.3c-.033.021-.09.06-.121.082c-.845.61-.845 1.553-.845 3.44v2.111c0 1.92 0 2.88.596 3.477c.597.596 1.557.596 3.476.596z"></svg:path></svg:g>`,
})
export class HugeiconsPieChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
