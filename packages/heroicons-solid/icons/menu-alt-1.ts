import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidMenuAlt1Icon],svg[heroicons-solid-menu-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidMenuAlt1Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
