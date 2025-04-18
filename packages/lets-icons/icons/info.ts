import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsInfoIcon],svg[lets-icons-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M13.737 21.848a10.002 10.002 0 0 0 6.697-15.221a10 10 0 1 0-6.698 15.221Z"></svg:path><svg:path stroke-linecap="square" d="M12 12v6m0-11V6"></svg:path></svg:g>`,
})
export class LetsIconsInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
