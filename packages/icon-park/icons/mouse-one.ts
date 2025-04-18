import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMouseOneIcon],svg[icon-park-mouse-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="24" height="32" x="12" y="12" rx="12"></svg:rect><svg:path fill="#2F88FF" d="M12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24V25H12V24Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 25C24 25 24 16 24 12C24 8 25.5 4 31 4C37 4 39 9 39 13"></svg:path></svg:g>`,
})
export class IconParkMouseOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
