import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoadWaysideIcon],svg[hugeicons-road-wayside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 2.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879m-6 13c0-2.828 0-4.243.879-5.121c.878-.879 2.293-.879 5.121-.879m-13-13c0 2.828 0 4.243-.879 5.121C6.743 8.5 5.328 8.5 2.5 8.5m6 13c0-2.828 0-4.243-.879-5.121C6.743 15.5 5.328 15.5 2.5 15.5M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3-9.5v2m9.5 7.5h-2M12 19.5v2M4.5 12h-2" color="currentColor"></svg:path>`,
})
export class HugeiconsRoadWaysideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
