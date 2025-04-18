import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFaceIdIcon],svg[arcticons-face-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 5.5H9.5a4 4 0 0 0-4 4V14m37 0V9.5a4 4 0 0 0-4-4H34m0 37h4.5a4 4 0 0 0 4-4V34m-37 0v4.5a4 4 0 0 0 4 4H14m2.281-22.437V16.5m15.438 3.563V16.5M21.625 28.375h1.188A2.375 2.375 0 0 0 25.188 26v-9.5m5.937 15.773C29.189 34.839 26.233 35.5 24 35.5s-5.189-.66-7.125-3.227"></svg:path>`,
})
export class ArcticonsFaceIdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
