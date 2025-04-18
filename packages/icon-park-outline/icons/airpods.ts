import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAirpodsIcon],svg[icon-park-outline-airpods-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 4a9 9 0 0 0-9 9v31h6V21.488A9 9 0 0 0 36 22a9 9 0 0 0 8-4.873V8.873A9 9 0 0 0 36 4M12 4a9 9 0 0 1 9 9v31h-6V21.488A9 9 0 0 1 12 22a9 9 0 0 1-8-4.873V8.873A9 9 0 0 1 12 4m3 9h-1m19 0h1"></svg:path>`,
})
export class IconParkOutlineAirpodsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
