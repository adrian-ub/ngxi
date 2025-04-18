import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBedLightIcon],svg[lets-icons-bed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 18.5v-11a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v11m-3 0v-8h-7a1 1 0 0 0-1 1v7"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 10.5h18v3h-19v-2a1 1 0 0 1 1-1"></svg:path><svg:path fill="currentColor" d="M10.5 12.5v-1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class LetsIconsBedLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
