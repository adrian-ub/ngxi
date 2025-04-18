import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTargetEdit20RegularIcon],svg[fluent-target-edit-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11.499a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-5-1.5a5 5 0 0 1 9.998-.057l-1.15 1.151q.149-.523.15-1.094a4 4 0 1 0-2.905 3.848l-.821.822q-.156.155-.288.33a5 5 0 0 1-4.984-5m5-7a7 7 0 0 1 6.929 6.007c.343-.024.69.014 1.021.112a8 8 0 1 0-8.943 8.82q.014-.142.05-.286l.173-.695A7 7 0 0 1 10 3m.979 12.377l4.829-4.83a1.87 1.87 0 0 1 2.644 2.645l-4.829 4.83a2.2 2.2 0 0 1-1.02.577l-1.498.375a.89.89 0 0 1-1.078-1.079l.374-1.498c.097-.386.296-.739.578-1.02"></svg:path>`,
})
export class FluentTargetEdit20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
