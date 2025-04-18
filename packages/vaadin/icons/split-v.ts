import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSplitVIcon],svg[vaadin-split-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v14h16V1zm14 1h1v1h-1zm1 2v4.5H1V4zM1 14V9.5h14V14z"></svg:path>`,
})
export class VaadinSplitVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
