import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUp28FilledIcon],svg[fluent-arrow-up-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.29 12.297a1 1 0 1 0 1.423 1.405l7.289-7.376v17.675a1 1 0 1 0 2 0V6.328l7.286 7.374a1 1 0 0 0 1.423-1.405L14.89 3.368a1.25 1.25 0 0 0-1.778 0z"></svg:path>`,
})
export class FluentArrowUp28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
