import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDiamondsIcon],svg[tabler-diamonds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.831 20.413l-5.375-6.91c-.608-.783-.608-2.223 0-3l5.375-6.911a1.457 1.457 0 0 1 2.338 0l5.375 6.91c.608.783.608 2.223 0 3l-5.375 6.911a1.457 1.457 0 0 1-2.338 0"></svg:path>`,
})
export class TablerDiamondsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
