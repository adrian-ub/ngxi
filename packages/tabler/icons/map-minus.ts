import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapMinusIcon],svg[tabler-map-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18.5L9 17l-6 3V7l6-3l6 3l6-3v11M9 4v13m6-10v8m1 4h6"></svg:path>`,
})
export class TablerMapMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
