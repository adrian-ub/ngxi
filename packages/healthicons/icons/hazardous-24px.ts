import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHazardous24pxIcon],svg[healthicons-hazardous-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2.728-3.575a3.15 3.15 0 0 0-1.152-1.153L15.5 5.938A7 7 0 0 1 19 12h-3.85a3.15 3.15 0 0 0-.422-1.575M8.85 12a3.15 3.15 0 0 1 1.575-2.728L8.5 5.938A7 7 0 0 0 5 12zM12 15.15a3.15 3.15 0 0 0 1.574-.421l1.926 3.333a7 7 0 0 1-7 0l1.925-3.334A3.15 3.15 0 0 0 12 15.15"></svg:path><svg:path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsHazardous24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
