import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7PauseIcon],svg[f7-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.266 47.36c1.101 0 1.992-.844 1.992-1.946V10.61a1.97 1.97 0 0 0-1.992-1.968c-1.102 0-2.016.867-2.016 1.968v34.805c0 1.102.914 1.945 2.016 1.945m15.492 0c1.101 0 1.992-.844 1.992-1.946V10.61a1.97 1.97 0 0 0-1.992-1.968c-1.102 0-2.016.867-2.016 1.968v34.805c0 1.102.914 1.945 2.016 1.945"></svg:path>`,
})
export class F7PauseIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
