import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasExpandDownIcon],svg[pajamas-expand-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 1a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm8.03 9.159a.75.75 0 0 0-1.06 0l-1.97 1.97V4.75a.75.75 0 0 0-1.5 0v7.379l-1.97-1.97a.75.75 0 0 0-1.06 1.06l3.25 3.25L8 15l.53-.53l3.25-3.25a.75.75 0 0 0 0-1.061" clip-rule="evenodd"></svg:path>`,
})
export class PajamasExpandDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
