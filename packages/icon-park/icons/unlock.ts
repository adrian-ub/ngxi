import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUnlockIcon],svg[icon-park-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="34" height="22" x="7" y="22.048" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M14 22V14.0047C13.9948 8.87022 17.9227 4.56718 23.0859 4.05117C28.249 3.53516 32.9673 6.97408 34 12.0059"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 30V36"></svg:path></svg:g>`,
})
export class IconParkUnlockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
