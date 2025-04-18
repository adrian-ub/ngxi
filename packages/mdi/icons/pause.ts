import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPauseIcon],svg[mdi-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19h4V5h-4M6 19h4V5H6z"></svg:path>`,
})
export class MdiPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
