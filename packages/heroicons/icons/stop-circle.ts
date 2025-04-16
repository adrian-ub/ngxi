import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsStopCircleIcon],svg[heroicons-stop-circle-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874a.563.563 0 0 1-.562.563H9.561A.56.56 0 0 1 9 14.438z"></svg:path></svg:g>`,
})
export class HeroiconsStopCircleIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
