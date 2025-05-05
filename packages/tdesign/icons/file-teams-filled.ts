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
  template: `<svg:path fill="currentColor" d="M15.414 1H3v22h18V6.586zM14.5 7.5V3L19 7.5zM15 10v2h-2v6h-2v-6H9v-2z"></svg:path>`,
})
export class TdesignFileTeamsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
