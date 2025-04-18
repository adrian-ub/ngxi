import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCommentsIcon],svg[icon-park-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M33 38H22V30H36V22H44V38H39L36 41L33 38Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 6H36V30H17L13 34L9 30H4V6Z"></svg:path><svg:path stroke="#fff" d="M12 22H18"></svg:path><svg:path stroke="#fff" d="M12 14H24"></svg:path></svg:g>`,
})
export class IconParkCommentsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
