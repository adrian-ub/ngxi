import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerScribbleIcon],svg[tabler-scribble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15c2 3 4 4 7 4s7-3 7-7s-3-7-6-7s-5 1.5-5 4s2 5 6 5s8.408-2.453 10-5"></svg:path>`,
})
export class TablerScribbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
