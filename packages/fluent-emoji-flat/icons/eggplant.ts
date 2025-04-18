import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatEggplantIcon],svg[fluent-emoji-flat-eggplant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8C42B3" d="M19.5 30c-15.019 0-17-11.5-17-21h10c1 3 2.262 7.623 9 6.5c6-1 8.5 3.727 8.5 6.5c0 2-.5 8-10.5 8"></svg:path><svg:path fill="#00D26A" d="M7.5 2A1.5 1.5 0 0 0 6 3.5v.771c-2.32.74-4 2.914-4 5.479V10c0 .552.495 1.018.919.664c.221-.184.401-.424.581-.664c.375-.5.75-1 1.5-1s1.125.5 1.5 1s.75 1 1.5 1s1.125-.5 1.5-1s.75-1 1.5-1c.738 0 1.089.484 1.445.976l.16.218c.349.46.895.133.895-.444A5.75 5.75 0 0 0 9 4.136V3.5A1.5 1.5 0 0 0 7.5 2"></svg:path><svg:path fill="#BCA4EB" d="M27 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatEggplantIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
