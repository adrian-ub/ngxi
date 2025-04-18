import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChefHatIcon],svg[icon-park-chef-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="8" x="12" y="34" fill="#2F88FF"></svg:rect><svg:path d="M29 34V20"></svg:path><svg:path d="M22 34V26"></svg:path><svg:path d="M12 25V34H36V25C36 25 41 22 41 17C41 12 37 10 32 10C32 8 29 4 24 4C19 4 16 8 16 10C12 10 7 12 7 17C7 22 12 25 12 25Z"></svg:path></svg:g>`,
})
export class IconParkChefHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
