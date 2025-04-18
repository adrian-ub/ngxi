import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLabelIcon],svg[openmoji-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F4AA41" d="m24.7 16.4l-17 6v27.9l17 6h40v-40h-40zm-8.5 25c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m24.7 16.4l-17 6v27.9l17 6h40v-40h-40zm-8.5 25c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5"></svg:path>`,
})
export class OpenmojiLabelIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
