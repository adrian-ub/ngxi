import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipCheckIcon],svg[mdi-tooltip-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-9.54 12l-3.5-3.5l1.41-1.42l2.09 2.09L15.64 6l1.41 1.41z"></svg:path>`,
})
export class MdiTooltipCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
