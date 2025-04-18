import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlowchart24FilledIcon],svg[fluent-flowchart-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.998 5.246a2.25 2.25 0 0 1 2.25-2.25h2.507a2.25 2.25 0 0 1 2.25 2.25v2.507a2.25 2.25 0 0 1-2.25 2.25H7.25v3.707q.07.051.134.116l2.79 2.79q.065.065.117.135h3.714v-.5a2.25 2.25 0 0 1 2.25-2.25h2.494a2.25 2.25 0 0 1 2.25 2.25v2.504a2.25 2.25 0 0 1-2.25 2.25h-2.494a2.25 2.25 0 0 1-2.25-2.25v-.504H10.29a1 1 0 0 1-.115.133l-2.791 2.792a1.25 1.25 0 0 1-1.768 0l-2.792-2.791a1.25 1.25 0 0 1 0-1.768l2.792-2.792a1 1 0 0 1 .134-.116v-3.706h-.502a2.25 2.25 0 0 1-2.25-2.25z"></svg:path>`,
})
export class FluentFlowchart24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
