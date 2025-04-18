import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayout4FillIcon],svg[ri-layout-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13v8H4a1 1 0 0 1-1-1v-7zm2-10h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7zM3 4a1 1 0 0 1 1-1h7v8H3z"></svg:path>`,
})
export class RiLayout4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
