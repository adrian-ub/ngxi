import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPaintedEggshellIcon],svg[icon-park-painted-eggshell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-width="4" d="M24 44C34.2524 44 40 37.0457 40 26C40 14.9543 31.1316 4 24 4C16.8684 4 8 14.9543 8 26C8 37.0457 13.7476 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" d="M21 38C22.6569 38 24 36.6569 24 35C24 33.3431 22.6569 32 21 32C19.3431 32 18 33.3431 18 35C18 36.6569 19.3431 38 21 38Z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M16 29.6675C17.1046 29.6675 18 28.772 18 27.6675C18 26.5629 17.1046 25.6675 16 25.6675C14.8954 25.6675 14 26.5629 14 27.6675C14 28.772 14.8954 29.6675 16 29.6675Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkPaintedEggshellIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
