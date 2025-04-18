import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7BubbleLeftFillIcon],svg[f7-bubble-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.094 52.316c.937 0 1.594-.468 2.695-1.5l8.484-7.734l15.82.023c6.985.024 10.735-3.867 10.735-10.734V14.418c0-6.867-3.75-10.734-10.734-10.734H12.906c-6.96 0-10.734 3.843-10.734 10.734v17.953c0 6.89 3.773 10.734 10.734 10.711h1.102v6.82c0 1.453.773 2.414 2.086 2.414"></svg:path>`,
})
export class F7BubbleLeftFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
