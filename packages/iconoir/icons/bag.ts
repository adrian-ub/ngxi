import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBagIcon],svg[iconoir-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.508 20h14.984a.6.6 0 0 0 .592-.501l1.8-10.8A.6.6 0 0 0 21.292 8H2.708a.6.6 0 0 0-.592.699l1.8 10.8a.6.6 0 0 0 .592.501Z"></svg:path><svg:path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></svg:path></svg:g>`,
})
export class IconoirBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
