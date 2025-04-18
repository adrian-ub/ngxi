import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasExpandRightIcon],svg[pajamas-expand-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 12.25a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0zM4.841 4.22a.75.75 0 0 1 0 1.06l-1.97 1.97h9.379a.75.75 0 0 1 0 1.5H2.871l1.97 1.97a.75.75 0 1 1-1.06 1.06L.53 8.53L0 8l.53-.53l3.25-3.25a.75.75 0 0 1 1.061 0" clip-rule="evenodd"></svg:path>`,
})
export class PajamasExpandRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
