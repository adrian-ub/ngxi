import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMerossIcon],svg[arcticons-meross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M26.841 19.006c1.504-3.192 3.251-3.302 4.9-3.292c5.403.03 5.194 7.516 5.194 7.516v14.078h5.563V19.956s.43-9.264-10.691-9.264c-3.41 0-5.116 1.03-6.948 3.38"></svg:path><svg:path d="M26.884 37.308V19.956s.43-9.264-10.69-9.264c-11.154 0-10.691 9.264-10.691 9.264v17.352h5.43V23.229s-.225-7.515 5.194-7.515c5.403 0 5.194 7.515 5.194 7.515v14.079z"></svg:path></svg:g>`,
})
export class ArcticonsMerossIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
