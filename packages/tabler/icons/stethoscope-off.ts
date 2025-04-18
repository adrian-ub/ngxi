import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStethoscopeOffIcon],svg[tabler-stethoscope-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.172 4.179A2 2 0 0 0 3 6v3.5a5.5 5.5 0 0 0 9.856 3.358M14 10V6a2 2 0 0 0-2-2h-1"></svg:path><svg:path d="M8 15a6 6 0 0 0 10.714 3.712m1.216-2.798q.07-.45.07-.914v-3m-9-9v2"></svg:path><svg:path d="M18 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerStethoscopeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
