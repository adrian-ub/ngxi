import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBnsIcon],svg[arcticons-bns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.44 25.95A5.56 5.56 0 0 1 23 20.39h0a5.56 5.56 0 0 1 5.56 5.56v3.61A5.56 5.56 0 0 1 23 35.12h0a5.56 5.56 0 0 1-5.56-5.56m0 5.56V12.88"></svg:path><svg:circle cx="31.15" cy="35.12" r=".75" fill="currentColor"></svg:circle><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsBnsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
