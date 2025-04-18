import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatDiamondSuitIcon],svg[fluent-emoji-flat-diamond-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F8312F" d="M14.378 2.772L4.523 14.555a2.27 2.27 0 0 0 0 2.898l9.855 11.782a2.102 2.102 0 0 0 3.244 0l9.855-11.782a2.27 2.27 0 0 0 0-2.898L17.622 2.772a2.09 2.09 0 0 0-3.244 0"></svg:path>`,
})
export class FluentEmojiFlatDiamondSuitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
