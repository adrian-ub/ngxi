import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBottleTwoIcon],svg[icon-park-outline-bottle-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M15 21.56a9.82 9.82 0 0 1 4.767-8.42a.48.48 0 0 0 .233-.411V4h8v8.729c0 .168.088.324.233.41A9.82 9.82 0 0 1 33 21.56V42a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2z"></svg:path><svg:path d="M20 10h8"></svg:path><svg:path stroke-linejoin="round" d="M33 23h-9v15h9m0 2V21m-13-9V8m8 4V8"></svg:path></svg:g>`,
})
export class IconParkOutlineBottleTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
