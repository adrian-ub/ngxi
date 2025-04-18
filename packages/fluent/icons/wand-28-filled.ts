import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWand28FilledIcon],svg[fluent-wand-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 3.75a.75.75 0 0 0-1.5 0V5h-1.25a.75.75 0 0 0 0 1.5H21v1.25a.75.75 0 0 0 1.5 0V6.5h1.25a.75.75 0 0 0 0-1.5H22.5zM7.75 5.5a.75.75 0 0 1 .75.75V7.5h1.25a.75.75 0 0 1 0 1.5H8.5v1.25a.75.75 0 0 1-1.5 0V9H5.75a.75.75 0 0 1 0-1.5H7V6.25a.75.75 0 0 1 .75-.75m12 11.5a.75.75 0 0 1 .75.75V19h1.25a.75.75 0 0 1 0 1.5H20.5v1.25a.75.75 0 0 1-1.5 0V20.5h-1.25a.75.75 0 0 1 0-1.5H19v-1.25a.75.75 0 0 1 .75-.75m-.116-7.522a2.875 2.875 0 0 0-4.54-.636l-.848.844l4.067 4.066l.84-.84a2.875 2.875 0 0 0 .481-3.434m-2.383 5.334l-4.067-4.067L2.807 21.088a2.88 2.88 0 1 0 4.068 4.079z"></svg:path>`,
})
export class FluentWand28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
