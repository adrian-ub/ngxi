import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsInboxIcon],svg[akar-icons-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path stroke-linecap="round" d="M3.304 6.132A4 4 0 0 1 7.209 3h9.582a4 4 0 0 1 3.905 3.132l.147.662a24 24 0 0 1 0 10.412l-.147.662A4 4 0 0 1 16.791 21H7.21a4 4 0 0 1-3.905-3.132l-.147-.662a24 24 0 0 1 0-10.412z"></svg:path><svg:path d="M2.5 13h6.338c0 1 .973 3 3.405 3s3.406-2 3.406-3H21.5"></svg:path></svg:g>`,
})
export class AkarIconsInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
