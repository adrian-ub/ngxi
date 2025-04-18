import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAtSignIcon],svg[icon-park-at-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44V44C28.9886 44 33.5507 42.1735 37.0539 39.1529"></svg:path><svg:path fill="#2F88FF" d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"></svg:path><svg:path stroke-linecap="round" d="M32 24C32 27.3137 34.6863 30 38 30V30C41.3137 30 44 27.3137 44 24"></svg:path><svg:path stroke-linecap="round" d="M32 25V16"></svg:path></svg:g>`,
})
export class IconParkAtSignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
