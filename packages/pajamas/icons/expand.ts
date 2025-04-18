import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasExpandIcon],svg[pajamas-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.78 11.16a.75.75 0 0 0-1.06 0l-1.97 1.97V2.87l1.97 1.97a.75.75 0 1 0 1.06-1.06L8.53.53L8 0l-.53.53l-3.25 3.25a.75.75 0 0 0 1.06 1.06l1.97-1.97v10.26l-1.97-1.97a.75.75 0 0 0-1.06 1.06l3.25 3.25L8 16l.53-.53l3.25-3.25a.75.75 0 0 0 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class PajamasExpandIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
