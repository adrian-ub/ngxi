import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileTeamsFilledIcon],svg[tdesign-file-teams-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h10v8h8v14H3zm12 11H9v2h2v6h2v-6h2z"></svg:path><svg:path fill="currentColor" d="M21 6.586V7h-6V1h.414z"></svg:path>`,
})
export class TdesignFileTeamsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
