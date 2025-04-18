import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiTramIcon],svg[twemoji-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#A7A9AC" d="M2 36h32L23 19H13z"></svg:path><svg:path fill="#58595B" d="M5 36h26L21 19h-6z"></svg:path><svg:path fill="#808285" d="M8 36h20l-9-17h-2z"></svg:path><svg:path fill="#A7A9AC" d="M28 35a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1m-2-4a1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1m-2-4a1 1 0 0 1-1 1H13a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1"></svg:path><svg:path fill="#58595B" d="M9.881 23.82C11.006 25.046 12.498 26 14 26h8c1.501 0 2.994-.955 4.119-2.18l-2.549-3.938c-1.359.097-3.148.118-5.57.118c-2.465 0-4.274.023-5.642-.008z"></svg:path><svg:path fill="#414042" d="M19 2a1 1 0 0 1-2 0V1a1 1 0 0 1 2 0z"></svg:path><svg:path fill="#6D6E71" d="M22 4a2 2 0 0 1-2 2h-4a2 2 0 0 1 0-4h4a2 2 0 0 1 2 2"></svg:path><svg:path fill="#D1D3D4" d="M28 18c0 2.209-3.791 5-6 5h-8c-2.209 0-6-2.791-6-5V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#808285" d="M25 16a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#55ACEE" d="M15 15h6a4 4 0 0 0 4-4V9H11v2a4 4 0 0 0 4 4"></svg:path><svg:path fill="#5C913B" d="M18 20c-7 0-8.754-1.801-10-3.242V18c0 2.209 3 6 6 6h8c3 0 6-3.791 6-6v-1.891C26.754 17.839 25 20 18 20"></svg:path><svg:path fill="#FFD983" d="M15 17.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 15 17.5m9 0a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 24 17.5"></svg:path><svg:path fill="#292F33" d="M25 9V7a2 2 0 0 0-2-2H13a2 2 0 0 0-2 2v2z"></svg:path><svg:path fill="#6D6E71" d="M21 7a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1"></svg:path>`,
})
export class TwemojiTramIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
