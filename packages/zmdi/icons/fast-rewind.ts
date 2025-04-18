import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFastRewindIcon],svg[zmdi-fast-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181 320L0 192L181 64zm11-128L373 64v256z"></svg:path>`,
})
export class ZmdiFastRewindIcon {
  readonly viewBox = input("0 0 376 384")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
