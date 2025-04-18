import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRewind28FilledIcon],svg[fluent-rewind-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.365 4.858c1.065-.845 2.634-.086 2.634 1.273v4.57l7.365-5.841C23.43 4.015 25 4.774 25 6.133v15.739c0 1.359-1.57 2.117-2.634 1.273L15 17.305v4.565c0 1.359-1.57 2.118-2.634 1.273l-9.637-7.64a1.917 1.917 0 0 1 0-3.004z"></svg:path>`,
})
export class FluentRewind28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
