import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockBoltIcon],svg[tabler-clock-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.984 12.53a9 9 0 1 0-7.552 8.355"></svg:path><svg:path d="M12 7v5l3 3m4 1l-2 3h4l-2 3"></svg:path></svg:g>`,
})
export class TablerClockBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
