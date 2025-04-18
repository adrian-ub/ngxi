import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodeCircle32FilledIcon],svg[fluent-code-circle-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 16c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14s14-6.268 14-14M19.918 9.394l-6 14a1 1 0 1 1-1.838-.788l6-14a1 1 0 0 1 1.838.788m-8.26 3.859L8.519 16l3.14 2.748a1 1 0 1 1-1.316 1.505l-4-3.5a1 1 0 0 1 0-1.505l4-3.5a1 1 0 1 1 1.316 1.505m8.59 6.906a1 1 0 0 1 .093-1.412L23.482 16l-3.14-2.747a1 1 0 0 1 1.317-1.505l4 3.5a1 1 0 0 1 0 1.505l-4 3.5a1 1 0 0 1-1.41-.094"></svg:path>`,
})
export class FluentCodeCircle32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
