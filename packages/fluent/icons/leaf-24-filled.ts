import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLeaf24FilledIcon],svg[fluent-leaf-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M11.037 3.048a1.75 1.75 0 0 1 2.2.225l3.712 3.711a6.999 6.999 0 0 1-4.2 11.908v2.358a.75.75 0 0 1-1.5 0v-2.358A6.999 6.999 0 0 1 7.05 6.985l3.712-3.712a1.76 1.76 0 0 1 .275-.225zM12 11a.75.75 0 0 0-.75.75v5.63a5.532 5.532 0 0 0 1.5 0v-5.63A.75.75 0 0 0 12 11z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentLeaf24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
