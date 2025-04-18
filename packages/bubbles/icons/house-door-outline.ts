import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesHouseDoorOutlineIcon],svg[bubbles-house-door-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.753 13.944v8.25h6v-6a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v6h6v-8.25m-19.5-1.5l10.19-10.189a1.5 1.5 0 0 1 2.121 0l10.19 10.19"></svg:path>`,
})
export class BubblesHouseDoorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
