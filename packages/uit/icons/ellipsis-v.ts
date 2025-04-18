import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitEllipsisVIcon],svg[uit-ellipsis-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-3a1 1 0 1 1-.001 2.001A1 1 0 0 1 12 4m0 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class UitEllipsisVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
