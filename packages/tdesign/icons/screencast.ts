import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignScreencastIcon],svg[tdesign-screencast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h22v17h-6v-2h4V4H3l.001 13h4v2H1zm4.586 20L12 15.585L18.414 22zm4.828-2h3.172L12 18.414z"></svg:path>`,
})
export class TdesignScreencastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
