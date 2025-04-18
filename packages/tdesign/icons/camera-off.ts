import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCameraOffIcon],svg[tdesign-camera-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 .586L22.414 21L21 22.414L19.586 21H1V5h2.586l-3-3zM5.586 7H3v12h14.586l-2.537-2.537a5 5 0 0 1-7.012-7.012zm3.885 3.885a3 3 0 0 0 4.144 4.144zM7.882 2h8.236l1.5 3H23v14h-2V7h-4.618l-1.5-3H9.118l-.64 1.279l-1.788-.894z"></svg:path>`,
})
export class TdesignCameraOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
