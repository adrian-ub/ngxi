import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRocketOneIcon],svg[icon-park-rocket-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.906 6.06267L22.3359 5.1094C23.3436 4.4376 24.6564 4.4376 25.6641 5.1094L27.094 6.06267C32.658 9.77199 36 16.0166 36 22.7037V33H12V22.7037C12 16.0166 15.342 9.77199 20.906 6.06267Z"></svg:path><svg:circle cx="24" cy="20" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 22L6 28.2174V33H42V28.2174L36 22"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 38V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 40V42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 40V42"></svg:path></svg:g>`,
})
export class IconParkRocketOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
