import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPennyIcon],svg[arcticons-penny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.234 8.336h15.594c6.46.538 11.26 6.211 10.722 12.67c-.539 6.46-6.211 11.26-12.67 10.722h-5.988l-1.67 7.936H4.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.841 16.69h2.785a3.575 3.575 0 1 1-.835 7.101h-2.785z"></svg:path><svg:circle cx="37.931" cy="34.095" r="5.569" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsPennyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
