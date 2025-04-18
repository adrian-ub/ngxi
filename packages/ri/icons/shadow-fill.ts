import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShadowFillIcon],svg[ri-shadow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3H3a1 1 0 0 1-1-1zm6 15v2h3.44l-2-2zm3.56 0l2 2h2.88l-2-2zM20 20v-1.44l-2-2V17a1 1 0 0 1-1 1h-.44l2 2zm0-6.44l-2-2v2.88l2 2zm0-2.12V8h-2v1.44z"></svg:path>`,
})
export class RiShadowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
