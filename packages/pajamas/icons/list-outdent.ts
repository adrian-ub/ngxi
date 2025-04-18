import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasListOutdentIcon],svg[pajamas-list-outdent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.75 3a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm2 4.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM3.34 5.72a.75.75 0 0 0-1.06 0L.53 7.47L0 8l.53.53l1.75 1.75a.75.75 0 1 0 1.06-1.06L2.12 8l1.22-1.22a.75.75 0 0 0 0-1.06m1.41 5.78a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasListOutdentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
