import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laTagIcon],svg[la-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 5l-.313.281L4.281 16.813l-.687.687l.687.719l9.5 9.5l.719.687l.688-.687l11.53-11.407L27 16V5zm.844 2H25v8.156L14.5 25.594L6.406 17.5zM22 9c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class LaTagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
