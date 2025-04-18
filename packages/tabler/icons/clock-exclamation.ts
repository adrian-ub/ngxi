import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockExclamationIcon],svg[tabler-clock-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.986 12.502a9 9 0 1 0-5.973 7.98"></svg:path><svg:path d="M12 7v5l3 3m4 1v3m0 3v.01"></svg:path></svg:g>`,
})
export class TablerClockExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
