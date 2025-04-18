import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCropIcon],svg[gravity-ui-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0a.75.75 0 0 1 .75.75V2.5h8.25a.75.75 0 0 1 .75.75v8.5h2a.75.75 0 0 1 0 1.5h-2v2a.75.75 0 0 1-1.5 0v-2H3.5a.75.75 0 0 1-.75-.75V4h-2a.75.75 0 0 1 0-1.5h2V.75A.75.75 0 0 1 3.5 0m.75 4v7.75h7.5V4z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCropIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
