import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiZzzIcon],svg[openmoji-zzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><svg:path stroke-width="6" d="M49 8h13.143L49 31h13.143m-34 2.75H37l-8.857 15.5H37"></svg:path><svg:path stroke-width="4.645" d="M9.143 52.5H16l-6.857 12H16"></svg:path></svg:g>`,
})
export class OpenmojiZzzIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
