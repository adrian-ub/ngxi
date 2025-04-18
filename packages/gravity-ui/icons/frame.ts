import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiFrameIcon],svg[gravity-ui-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.25 1a.75.75 0 0 1 .75.75V3h1.25a.75.75 0 0 1 0 1.5H13v7h1.25a.75.75 0 0 1 0 1.5H13v1.25a.75.75 0 0 1-1.5 0V13h-7v1.25a.75.75 0 0 1-1.5 0V13H1.75a.75.75 0 0 1 0-1.5H3v-7H1.75a.75.75 0 0 1 0-1.5H3V1.75a.75.75 0 0 1 1.5 0V3h7V1.75a.75.75 0 0 1 .75-.75M4.5 4.5v7h7v-7z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFrameIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
