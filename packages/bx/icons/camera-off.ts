import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCameraOffIcon],svg[bx-camera-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.014 12.135c.074 2.062 1.789 3.777 3.851 3.851z"></svg:path><svg:path fill="currentColor" d="M4 20h11.879l-2-2H4V8.121L2.144 6.265A2 2 0 0 0 2 7v11c0 1.103.897 2 2 2M20 5h-2.586l-2.707-2.707A1 1 0 0 0 14 2h-4a1 1 0 0 0-.707.293L6.586 5h-.172L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-.626-.626A1.98 1.98 0 0 0 22 18V7c0-1.103-.897-2-2-2m-6.081 7.505l-2.424-2.425c.163-.046.331-.08.505-.08c1.065 0 2 .935 2 2c0 .174-.033.342-.081.505m1.502 1.501A3.9 3.9 0 0 0 16 12c0-2.168-1.832-4-4-4c-.729 0-1.412.22-2.007.579L7.914 6.5l2.5-2.5h3.172l2.707 2.707A1 1 0 0 0 17 7l3-.001V18h-.586z"></svg:path>`,
})
export class BxCameraOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
