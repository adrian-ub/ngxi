import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTranslateOutlineIcon],svg[lsicon-translate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 2v1.5m0 0H3m2.5 0H8m-1 0l-1.5 3l-2 2m.5-3L7 8m2.5 4h3m.5 2c0-.5-2-6-2-6s-2 5.5-2 6m-5.5-4v1.5a1 1 0 0 0 1 1H7m2.5-9h2a1 1 0 0 1 1 1v2"></svg:path>`,
})
export class LsiconTranslateOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
