import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBanLineIcon],svg[majesticons-ban-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.094 5.68L18.32 16.906A8 8 0 0 0 7.094 5.68zm9.812 12.64L5.68 7.094A8 8 0 0 0 16.906 18.32zM4.929 4.929A9.972 9.972 0 0 1 12 2c5.523 0 10 4.477 10 10a9.972 9.972 0 0 1-2.929 7.071A9.972 9.972 0 0 1 12 22C6.477 22 2 17.523 2 12a9.972 9.972 0 0 1 2.929-7.071z"></svg:path></svg:g>`,
})
export class MajesticonsBanLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
