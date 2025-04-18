import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerYogaIcon],svg[tabler-yoga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4 20h4l1.5-3m7.5 3l-1-5h-5l1-7"></svg:path><svg:path d="m4 10l4-1l4-1l4 1.5l4 1.5"></svg:path></svg:g>`,
})
export class TablerYogaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
