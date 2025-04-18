import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSkewYIcon],svg[tabler-skew-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.326 19h15.348a1 1 0 0 0 .962-1.275l-3.429-12A1 1 0 0 0 16.246 5H7.754a1 1 0 0 0-.961.725l-3.429 12A1 1 0 0 0 4.326 19"></svg:path>`,
})
export class TablerSkewYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
