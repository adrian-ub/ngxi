import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMistOffIcon],svg[tabler-mist-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5h9M3 10h7m8 0h1M5 15h5m4 0h1m4 0h2M3 20h9m4 0h3M3 3l18 18"></svg:path>`,
})
export class TablerMistOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
