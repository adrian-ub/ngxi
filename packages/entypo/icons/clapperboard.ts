import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoClapperboardIcon],svg[entypo-clapperboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 3v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1l3 3h2.5l-3-3h3l3 3H13l-3-3h3l3 3h2.5l-3-3H19a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path>`,
})
export class EntypoClapperboardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
