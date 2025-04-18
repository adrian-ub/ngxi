import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSkiJumpingIcon],svg[tabler-ski-jumping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6 14.5L12 13V7l5 4M7 17.5l5-4.5"></svg:path><svg:path d="m15.103 21.58l6.762-14.502a2 2 0 0 0-.968-2.657m-12 17.159L2.135 7.077a2 2 0 0 1 .968-2.657M7 11l5-4"></svg:path></svg:g>`,
})
export class TablerSkiJumpingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
