import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteIcecreamSolidIcon],svg[flowbite-icecream-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.083 7A6.002 6.002 0 0 1 18 8h-2.5a2.5 2.5 0 0 0-2.5 2.5a.5.5 0 0 1-1 0V10a3 3 0 0 0-3-3z"></svg:path><svg:path d="M6 9v5a2 2 0 0 0 2 2h3v5a1 1 0 1 0 2 0v-5h3a2 2 0 0 0 2-2v-4h-2.5a.5.5 0 0 0-.5.5a2.5 2.5 0 0 1-5 0V10a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class FlowbiteIcecreamSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
