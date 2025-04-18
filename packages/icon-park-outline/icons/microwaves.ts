import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMicrowavesIcon],svg[icon-park-outline-microwaves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="24" height="38" x="5" y="34" stroke="currentColor" stroke-width="4" rx="2" transform="rotate(-90 5 34)"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 19h4m-11 6h22m-23 9v4m8-4v4m8-4v4m8-4v4"></svg:path><svg:path fill="currentColor" d="M15 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class IconParkOutlineMicrowavesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
