import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDeleteOneIcon],svg[icon-park-outline-delete-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="m15 12l1.2-7h15.6l1.2 7"></svg:path><svg:path stroke-linecap="round" d="M6 12h36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m37 12l-2 31H13l-2-31z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M19 35h10"></svg:path></svg:g>`,
})
export class IconParkOutlineDeleteOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
