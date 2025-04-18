import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPigpenwIcon],svg[whh-pigpenw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1011.457 162l-416 807q-20 39-58.5 50.5t-72.5-10.5q-20-13-33-36q0-1-1-2t-1-2l-416-807q-20-39-9.5-82t44.5-65t72.5-10.5t58.5 49.5l333 646l333-646q20-38 58.5-49.5t72.5 10.5t44.5 65t-9.5 82m-499 94q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhPigpenwIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
