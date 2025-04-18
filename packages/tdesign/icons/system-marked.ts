import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemMarkedIcon],svg[tdesign-system-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v10h-2V3H3v13h9.5v2H1zm13.5 11.996H23v10.295l-4.247-2.617L14.5 23.29zm2 2v4.715l2.254-1.385L21 19.709v-4.713zM2.25 21H12.5v2H2.25z"></svg:path>`,
})
export class TdesignSystemMarkedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
