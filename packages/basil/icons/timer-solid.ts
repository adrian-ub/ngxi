import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilTimerSolidIcon],svg[basil-timer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3.578a.75.75 0 0 1 0-1.5h3.536a.75.75 0 0 1 0 1.5zm-3.47.452a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 5.06a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17m4.99 3.711a.5.5 0 0 0-.7-.701l-3.175 2.468l-2.075 1.483a1.434 1.434 0 1 0 2 2l1.482-2.076z" clip-rule="evenodd"></svg:path>`,
})
export class BasilTimerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
