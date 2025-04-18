import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCaravanIcon],svg[tabler-caravan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M11 18h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8.5A5.5 5.5 0 0 0 3 12.5V16a2 2 0 0 0 2 2h2M8 7l7-3l1 3"></svg:path><svg:path d="M13 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm7 4.5h2"></svg:path></svg:g>`,
})
export class TablerCaravanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
