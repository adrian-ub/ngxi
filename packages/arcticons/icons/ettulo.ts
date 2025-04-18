import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEttuloIcon],svg[arcticons-ettulo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.5 41.5v-35c0-1.1-.9-2-2-2h-19c-1.1 0-2 .9-2 2v35c0 1.1.9 2 2 2h19c1.1 0 2-.9 2-2"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="15.428" r="2.8"></svg:circle><svg:path d="M29.4 23.628a5.4 5.4 0 0 0-10.8 0z"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M20.839 38.275V36.56a3.161 3.161 0 1 1 6.322 0v1.714"></svg:path><svg:path d="M22.987 37.539v-.793a1.014 1.014 0 0 1 2.027 0v2.597m-2.028-.19v.807"></svg:path></svg:g>`,
})
export class ArcticonsEttuloIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
