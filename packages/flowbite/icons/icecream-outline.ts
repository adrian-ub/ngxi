import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteIcecreamOutlineIcon],svg[flowbite-icecream-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8v6a1 1 0 0 0 1 1h4M7 8a5 5 0 0 1 10 0v6a1 1 0 0 1-1 1h-4M7 8h2a2 2 0 0 1 2 2v.5a1.5 1.5 0 0 0 3 0A1.5 1.5 0 0 1 15.5 9H17m-5 6v6"></svg:path>`,
})
export class FlowbiteIcecreamOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
