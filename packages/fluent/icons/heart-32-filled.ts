import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeart32FilledIcon],svg[fluent-heart-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.53 7.122c-2.979-4.166-9.174-4.162-12.146.009a7.46 7.46 0 0 0 .609 9.409l11.275 12.14a1 1 0 0 0 1.464.001L28 16.583a7.48 7.48 0 0 0 .584-9.485c-3.01-4.155-9.216-4.114-12.171.081l-.417.593z"></svg:path>`,
})
export class FluentHeart32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
