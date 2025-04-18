import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationArrowRight48FilledIcon],svg[fluent-location-arrow-right-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M37 32L26.912 42.71a4 4 0 0 1-5.824 0L11 32h.038l-.017-.02l-.021-.025A16.92 16.92 0 0 1 7 21c0-9.389 7.611-17 17-17s17 7.611 17 17a16.92 16.92 0 0 1-4 10.955l-.021.025l-.017.02zM25.116 16.884l2.866 2.866H17a1.25 1.25 0 1 0 0 2.5h10.982l-2.866 2.866a1.25 1.25 0 0 0 1.768 1.768l5-5a1.25 1.25 0 0 0 0-1.768l-5-5a1.25 1.25 0 0 0-1.768 1.768"></svg:path>`,
})
export class FluentLocationArrowRight48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
