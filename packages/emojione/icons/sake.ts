import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneSakeIcon],svg[emojione-sake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b7b198" d="M44.1 50.4c7.6 0 13.8 2.6 13.8 5.8S51.7 62 44.1 62s-13.8-2.6-13.8-5.8s6.1-5.8 13.8-5.8"></svg:path><svg:path fill="#f9f3d9" d="M35.6 5.4c-.3 2.2 1.9 6.4 2 8.7c.2 3.3-18.4 24.7-8.6 40.5c4.4 7.1 25.7 7.1 30.1 0c9.8-15.8-8.8-37.1-8.6-40.5c.1-2.2 2.4-6.5 2-8.7c-.7-4.5-16.1-4.5-16.9 0"></svg:path><svg:g fill="#b7b198"><svg:path d="M37 5.7c-.8 4.9 14.9 4.9 14.1 0c-.6-4-13.4-4-14.1 0"></svg:path><svg:ellipse cx="13" cy="58.5" rx="10.1" ry="3.5"></svg:ellipse></svg:g><svg:g fill="#f9f3d9"><svg:path d="M2 43.8h22v13.1H2z"></svg:path><svg:ellipse cx="13" cy="43.8" rx="11" ry="3.8"></svg:ellipse><svg:ellipse cx="13" cy="56.9" rx="11" ry="3.8"></svg:ellipse></svg:g><svg:path fill="#b7b198" d="M22.1 45.1c.5-.3.7-.7.7-1.1c0-1.6-4.4-3-9.8-3s-9.8 1.3-9.8 3c0 .4.3.8.7 1.1c1.5-1.1 5-1.9 9.1-1.9s7.7.8 9.1 1.9"></svg:path><svg:path fill="#b4d7ee" d="M22.1 45.1c-1.5-1.1-5-1.9-9.1-1.9s-7.7.8-9.1 1.9c1.5 1.1 5 1.9 9.1 1.9c4.1-.1 7.7-.9 9.1-1.9"></svg:path>`,
})
export class EmojioneSakeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
