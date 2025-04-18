import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrophyOffIcon],svg[tabler-trophy-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8m-4-4v4M8 4h9m0 0v8q0 .465-.082.905m-1.384 2.632A5 5 0 0 1 7 12V7M3 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 3l18 18"></svg:path>`,
})
export class TablerTrophyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
