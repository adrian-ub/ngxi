import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerConfuciusIcon],svg[tabler-confucius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 19l3 2V3m-8 7l8-2M4 18l8-10m8 10l-8-8l8-4"></svg:path>`,
})
export class TablerConfuciusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
