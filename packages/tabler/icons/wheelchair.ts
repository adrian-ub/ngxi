import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWheelchairIcon],svg[tabler-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 16a5 5 0 1 0 10 0a5 5 0 1 0-10 0m14 3a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M19 17a3 3 0 0 0-3-3h-3.4M3 3h1a2 2 0 0 1 2 2v6m0-3h11m-2 0v6"></svg:path></svg:g>`,
})
export class TablerWheelchairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
