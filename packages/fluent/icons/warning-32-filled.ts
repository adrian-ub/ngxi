import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWarning32FilledIcon],svg[fluent-warning-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.064 3.809c-1.332-2.41-4.796-2.41-6.128 0L2.443 22.808C1.155 25.14 2.843 28 5.507 28h20.987c2.664 0 4.352-2.86 3.063-5.192zM17.25 22a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M16 9a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentWarning32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
