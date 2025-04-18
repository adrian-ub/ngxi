import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerUserScreenIcon],svg[tabler-user-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.03 17.818A3 3 0 0 0 21 15V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8c0 1.317.85 2.436 2.03 2.84"></svg:path><svg:path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-2 7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"></svg:path></svg:g>`,
})
export class TablerUserScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
