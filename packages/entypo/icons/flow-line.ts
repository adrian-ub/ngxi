import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoFlowLineIcon],svg[entypo-flow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13.824V6.176A2.4 2.4 0 0 0 12.4 4a2.4 2.4 0 1 0-4.8 0c0 .967.576 1.796 1.4 2.176v7.649A2.39 2.39 0 0 0 7.6 16a2.4 2.4 0 1 0 4.8 0c0-.967-.575-1.796-1.4-2.176M10 2.615a1.384 1.384 0 1 1 0 2.768a1.384 1.384 0 0 1 0-2.768m0 14.77a1.385 1.385 0 1 1 0-2.77a1.385 1.385 0 0 1 0 2.77"></svg:path>`,
})
export class EntypoFlowLineIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
