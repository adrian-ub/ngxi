import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBottleIcon],svg[icon-park-outline-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M36 18H12v26h24z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19.894 11h8.212a4 4 0 0 1 3.8 2.75L33.303 18H14.695l1.4-4.25a4 4 0 0 1 3.8-2.75" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M21 11V7a3 3 0 1 1 6 0v4m-8.5 15v10"></svg:path></svg:g>`,
})
export class IconParkOutlineBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
