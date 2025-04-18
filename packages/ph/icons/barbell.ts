import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBarbellIcon],svg[ph-barbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 120h-8V88a16 16 0 0 0-16-16h-16v-8a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v56h-48V64a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v8H32a16 16 0 0 0-16 16v32H8a8 8 0 0 0 0 16h8v32a16 16 0 0 0 16 16h16v8a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-56h48v56a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-8h16a16 16 0 0 0 16-16v-32h8a8 8 0 0 0 0-16M32 168V88h16v80Zm56 24H64V64h24zm104 0h-24V64h24zm32-24h-16V88h16Z"></svg:path>`,
})
export class PhBarbellIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
