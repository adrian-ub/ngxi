import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTimeDuration15Icon],svg[tabler-time-duration-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2V9h3M9 9v6m-6-3v.01M12 21v.01M7.5 4.2v.01m9 15.59v.01m-9-.01v.01M4.2 16.5v.01m15.6-.01v.01M4.2 7.5v.01M21 12a9 9 0 0 0-9-9"></svg:path>`,
})
export class TablerTimeDuration15Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
