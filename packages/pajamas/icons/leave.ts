import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasLeaveIcon],svg[pajamas-leave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.16 4.28a.75.75 0 1 1 1.06-1.06l3.25 3.25L16 7l-.53.53l-3.25 3.25a.75.75 0 0 1-1.06-1.06l1.97-1.97H3.25a1.75 1.75 0 1 0 0 3.5h2a.75.75 0 0 1 0 1.5h-2a3.25 3.25 0 0 1 0-6.5h9.88z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasLeaveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
