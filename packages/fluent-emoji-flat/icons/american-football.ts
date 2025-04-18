import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatAmericanFootballIcon],svg[fluent-emoji-flat-american-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#6D4534" d="M29.728 6.024c2.25 13.92-9.782 25.96-23.705 23.7a4.52 4.52 0 0 1-3.75-3.75c-2.252-13.92 9.78-25.96 23.703-23.7c1.92.31 3.43 1.82 3.75 3.75"></svg:path><svg:path fill="#D3D3D3" d="m14.864 3.521l13.613 13.613a20.4 20.4 0 0 0 1.25-4.407L19.272 2.272a20.4 20.4 0 0 0-4.408 1.25m2.513 24.856L3.623 14.623a20.4 20.4 0 0 0-1.3 4.357L13.02 29.677a20.4 20.4 0 0 0 4.357-1.3"></svg:path><svg:path fill="#fff" d="M19.119 10.381a.875.875 0 1 0-1.238 1.238l2 2a.875.875 0 1 0 1.238-1.238zm-3.738 2.5a.875.875 0 0 1 1.238 0l2 2a.875.875 0 1 1-1.238 1.238l-2-2a.875.875 0 0 1 0-1.238m-1.262 2.5a.875.875 0 1 0-1.238 1.238l2 2a.875.875 0 1 0 1.238-1.238zm-2.5 2.5a.875.875 0 1 0-1.238 1.238l2 2a.875.875 0 1 0 1.238-1.238z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatAmericanFootballIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
