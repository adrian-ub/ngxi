import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwBackwardIcon],svg[uiw-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.903 2.931l-.001 5.108l6.615-5.593c.62-.526 1.58-.323 1.58.485v14.14c0 .805-.96 1.009-1.58.483l-6.615-5.593v5.11c0 .805-.96 1.009-1.58.483l-8.085-6.836a.936.936 0 0 1 0-1.434l8.086-6.838c.62-.526 1.58-.323 1.58.485"></svg:path>`,
})
export class UiwBackwardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
