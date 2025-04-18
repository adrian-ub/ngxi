import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMushroomFilledIcon],svg[tabler-mushroom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15v4a3 3 0 0 1-5.995.176L9 19v-4zM4.9 13a1.9 1.9 0 0 1-1.894-1.752L3 11.1C3 6.077 7.027 2 12 2s9 4.077 9 9.1a1.9 1.9 0 0 1-1.752 1.894L19.1 13z"></svg:path>`,
})
export class TablerMushroomFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
