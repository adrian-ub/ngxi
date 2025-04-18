import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidCircleChevronDownIcon],svg[fa6-solid-circle-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0a256 256 0 1 0 0 512a256 256 0 1 0 0-512M135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87l87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0z"></svg:path>`,
})
export class Fa6SolidCircleChevronDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
