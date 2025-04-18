import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7StopFillIcon],svg[f7-stop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.898 41.922c0 3.258 1.97 5.18 5.274 5.18h27.656c3.305 0 5.274-1.922 5.274-5.18V14.078c0-3.258-1.97-5.18-5.274-5.18H14.172c-3.305 0-5.274 1.922-5.274 5.18Z"></svg:path>`,
})
export class F7StopFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
