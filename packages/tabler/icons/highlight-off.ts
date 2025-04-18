import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHighlightOffIcon],svg[tabler-highlight-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 9l-6 6v4h4l6-6m2-2l2.503-2.503a2.828 2.828 0 1 0-4-4l-2.497 2.497M12.5 5.5l4 4m-12 4l4 4M19 15h2v2m-2 2h-6l3-3M3 3l18 18"></svg:path>`,
})
export class TablerHighlightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
