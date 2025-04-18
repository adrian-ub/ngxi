import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFindReplaceFillIcon],svg[ri-find-replace-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617M16.659 9A6 6 0 0 0 11 5c-3.315 0-6 2.685-6 6h2a4 4 0 0 1 5.91-3.515L12 9zM17 11h-2a4 4 0 0 1-5.91 3.515L10 13H5.341A6 6 0 0 0 11 17c3.315 0 6-2.685 6-6"></svg:path>`,
})
export class RiFindReplaceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
