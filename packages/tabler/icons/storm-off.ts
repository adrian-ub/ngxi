import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStormOffIcon],svg[tabler-storm-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.884 9.874a3 3 0 1 0 4.24 4.246m.57-3.441a3 3 0 0 0-1.41-1.39"></svg:path><svg:path d="M7.037 7.063a7 7 0 0 0 9.907 9.892m1.585-2.426A7 7 0 0 0 9.471 5.47"></svg:path><svg:path d="M5.369 14.236c-1.605-3.428-1.597-6.673-1-9.849M18.63 9.76a14.3 14.3 0 0 1 1.368 6.251m-.37 3.608q-.132.69-.295 1.377M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerStormOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
