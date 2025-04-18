import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEveryUserIcon],svg[icon-park-every-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="14" cy="29" r="5" fill="#2F88FF"></svg:circle><svg:circle cx="34" cy="29" r="5" fill="#2F88FF"></svg:circle><svg:circle cx="24" cy="9" r="5" fill="#2F88FF"></svg:circle><svg:path d="M24 44C24 38.4772 19.5228 34 14 34C8.47715 34 4 38.4772 4 44"></svg:path><svg:path d="M44 44C44 38.4772 39.5228 34 34 34C28.4772 34 24 38.4772 24 44"></svg:path><svg:path d="M34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24"></svg:path></svg:g>`,
})
export class IconParkEveryUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
