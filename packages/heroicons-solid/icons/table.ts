import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidTableIcon],svg[heroicons-solid-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-1 9v-1h5v2H5a1 1 0 0 1-1-1m7 1h4a1 1 0 0 0 1-1v-1h-5zm0-4h5V8h-5zM9 8H4v2h5z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidTableIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
