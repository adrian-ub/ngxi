import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTimeDuration10Icon],svg[tabler-time-duration-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9v6m3-4v2a2 2 0 1 0 4 0v-2a2 2 0 1 0-4 0m-9 1v.01M21 12v.01M12 21v.01M7.5 4.2v.01m9 15.59v.01m-9-.01v.01M4.2 16.5v.01m15.6-.01v.01M4.2 7.5v.01m15.61.017A9 9 0 0 0 12 3"></svg:path>`,
})
export class TablerTimeDuration10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
