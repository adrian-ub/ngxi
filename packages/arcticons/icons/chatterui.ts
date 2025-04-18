import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChatteruiIcon],svg[arcticons-chatterui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.173 2.503A21.5 21.5 0 0 0 5.016 24a21.499 21.499 0 0 0 37.968 13.82l-6.511-5.465a13 13 0 0 1-9.959 4.644c-7.18 0-13-5.82-13-13s5.82-12.998 13-12.998a13 13 0 0 1 9.953 4.648l6.517-5.469a21.5 21.5 0 0 0-16.811-7.677"></svg:path><svg:circle cx="23.515" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.764" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="40.014" cy="24" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsChatteruiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
