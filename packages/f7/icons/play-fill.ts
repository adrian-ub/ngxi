import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7PlayFillIcon],svg[f7-play-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.094 47.84c.937 0 1.734-.375 2.672-.914l27.328-15.797c1.945-1.149 2.625-1.899 2.625-3.14c0-1.243-.68-1.993-2.625-3.118L15.766 9.051c-.938-.54-1.735-.89-2.672-.89c-1.735 0-2.813 1.312-2.813 3.35v32.954c0 2.039 1.078 3.375 2.813 3.375"></svg:path>`,
})
export class F7PlayFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
