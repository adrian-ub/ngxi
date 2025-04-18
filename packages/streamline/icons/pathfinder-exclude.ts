import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderExcludeIcon],svg[streamline-pathfinder-exclude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 2.5v-1a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1m9-5h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-1m4-7H9a.5.5 0 0 1 .5.5v.5"></svg:path><svg:path d="M9.5 8.5V9a.5.5 0 0 1-.5.5h-.5m-3 0H5a.5.5 0 0 1-.5-.5v-.5m0-3V5a.5.5 0 0 1 .5-.5h.5"></svg:path></svg:g>`,
})
export class StreamlinePathfinderExcludeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
