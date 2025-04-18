import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaznIcon],svg[arcticons-dazn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 5.5h-37V20l4 4l-4 4v14.5h37V28l-4-4l4-4Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.736 22.217V10.5h2.636a5.126 5.126 0 0 1 5.126 5.126v1.465a5.126 5.126 0 0 1-5.126 5.126ZM26.568 37.5V25.783L34.33 37.5V25.783m-20.66 0h7.762L13.67 37.5h7.762m5.209-15.318L30.529 10.5m3.728 11.717L30.529 10.5m2.481 7.797h-5.076"></svg:path>`,
})
export class ArcticonsDaznIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
