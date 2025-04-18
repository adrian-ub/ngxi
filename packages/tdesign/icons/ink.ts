import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignInkIcon],svg[tdesign-ink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.896V21H2v-8.104l2.196-4.182H6.2V3h11.6v5.714h2.004zm-6.2-4.182V5H8.2v3.714zM20 13.39l-1.404-2.675H5.404L4 13.39V19h16z"></svg:path>`,
})
export class TdesignInkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
