import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTransitionTopIcon],svg[tabler-transition-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3m3 15h12a3 3 0 0 0 0-6H6a3 3 0 0 0 0 6m6-6V7m-3 3l3-3l3 3"></svg:path>`,
})
export class TablerTransitionTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
