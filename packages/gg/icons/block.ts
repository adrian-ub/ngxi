import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBlockIcon],svg[gg-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.465 14.121a1 1 0 1 0 1.414 1.415l5.657-5.657a1 1 0 1 0-1.415-1.415z"></svg:path><svg:path fill-rule="evenodd" d="M6.343 17.657A8 8 0 1 0 17.657 6.343A8 8 0 0 0 6.343 17.657m9.9-1.414a6 6 0 1 1-8.486-8.485a6 6 0 0 1 8.486 8.485" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
