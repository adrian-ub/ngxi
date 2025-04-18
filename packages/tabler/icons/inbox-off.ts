import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerInboxOffIcon],svg[tabler-inbox-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 4h10a2 2 0 0 1 2 2v10m-.593 3.422A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.554.225-1.056.59-1.418"></svg:path><svg:path d="M4 13h3l3 3h4l.987-.987M17 13h3M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerInboxOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
