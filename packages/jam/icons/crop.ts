import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCropIcon],svg[jam-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17H7a4 4 0 0 1-4-4V5H1a1 1 0 1 1 0-2h2v-4v2a1 1 0 1 1 2 0v2h8a4 4 0 0 1 4 4v8h2a1 1 0 0 1 0 2h-2v4v-2a1 1 0 0 1-2 0zm0-2V7a2 2 0 0 0-2-2H5v8a2 2 0 0 0 2 2z"></svg:path>`,
})
export class JamCropIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
