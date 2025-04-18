import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBaseballCapIcon],svg[icon-park-baseball-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 30C12 21.1634 19.1634 14 28 14V14C36.8366 14 44 21.1634 44 30V36H12V30Z"></svg:path><svg:path d="M21.9997 36C20.9997 32.5 20.9997 14 27.9997 14C34.9997 14 34.4997 32 33.9997 36"></svg:path><svg:rect width="30" height="6" x="4" y="36" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:circle cx="28" cy="10" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkBaseballCapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
