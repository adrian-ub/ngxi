import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMojoIcon],svg[arcticons-mojo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="7.611" height="18.33" x="7.177" y="14.835" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.806" ry="3.806" transform="rotate(30 10.982 24)"></svg:rect><svg:rect width="7.611" height="18.33" x="20.194" y="14.835" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.806" ry="3.806" transform="rotate(30 24 24)"></svg:rect><svg:rect width="7.611" height="18.33" x="33.212" y="14.835" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.806" ry="3.806" transform="rotate(30 37.018 24)"></svg:rect>`,
})
export class ArcticonsMojoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
