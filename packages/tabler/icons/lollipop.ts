import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLollipopIcon],svg[tabler-lollipop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0"></svg:path><svg:path d="M21 10a3.5 3.5 0 0 0-7 0m0 0a3.5 3.5 0 0 1-7 0m7 7a3.5 3.5 0 0 0 0-7m0-7a3.5 3.5 0 0 0 0 7M3 21l6-6"></svg:path></svg:g>`,
})
export class TablerLollipopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
