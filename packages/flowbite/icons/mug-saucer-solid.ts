import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMugSaucerSolidIcon],svg[flowbite-mug-saucer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5 5a1 1 0 0 0-.995 1.1l.64 6.398A5 5 0 0 0 9.62 17h.76a5 5 0 0 0 4.9-4H17a3 3 0 1 0 0-6h-1.095l.09-.9A1 1 0 0 0 15 5zm12 6h-1.495l.2-2H17a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path d="M5 18a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class FlowbiteMugSaucerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
