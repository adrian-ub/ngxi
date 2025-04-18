import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHorseshoeIcon],svg[tabler-horseshoe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 17c.5-1.242 2-2 2-5s-1-9-9-9s-9 6-9 9s1.495 3.749 2 5l-2 1l2 3l2.406-1.147c1.25-.714 1.778-2.08 1.203-3.363C7.531 14.083 7 8 12 8s4.469 6.083 3.39 8.49c-.574 1.284-.045 2.649 1.204 3.363L19 21l2-3z"></svg:path>`,
})
export class TablerHorseshoeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
