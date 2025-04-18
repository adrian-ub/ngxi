import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerLeftDownSolidIcon],svg[mynaui-fat-corner-left-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.62 2.721a.75.75 0 0 1-.235.87c-2.793 2.187-4.196 4.003-4.515 5.437c-.309 1.393-.39 2.714-.252 3.969H20a.75.75 0 0 1 .497 1.312l-8.214 7.253a.75.75 0 0 1-1.008-.013l-7.786-7.253a.75.75 0 0 1 .511-1.3h4.064c.193-2.747 1.341-5.118 3.421-7.08c2.253-2.126 5.054-3.341 8.366-3.663a.75.75 0 0 1 .768.468"></svg:path>`,
})
export class MynauiFatCornerLeftDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
