import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWindowMinimizeIcon],svg[zmdi-window-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 363H0v-86h341z"></svg:path>`,
})
export class ZmdiWindowMinimizeIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
