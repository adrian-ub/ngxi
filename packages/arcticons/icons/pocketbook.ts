import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPocketbookIcon],svg[arcticons-pocketbook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 41.559h37"></svg:path><svg:rect width="7.207" height="27.488" x="7.048" y="9.181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.692" ry="1.692"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.048 14.335h7.206"></svg:path><svg:rect width="7.207" height="30.23" x="14.254" y="6.441" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.692" ry="1.692"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.254 11.975h7.208"></svg:path><svg:rect width="7.207" height="27.488" x="21.462" y="9.181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.692" ry="1.692"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.462 14.335h7.207"></svg:path><svg:rect width="7.207" height="27.488" x="31.682" y="9.181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.692" ry="1.692" transform="rotate(-10 35.286 22.925)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.245 15.092l7.098-1.251"></svg:path>`,
})
export class ArcticonsPocketbookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
