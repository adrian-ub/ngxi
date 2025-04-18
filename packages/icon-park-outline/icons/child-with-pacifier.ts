import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChildWithPacifierIcon],svg[icon-park-outline-child-with-pacifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 42c9.389 0 17-7.611 17-17S33.389 8 24 8S7 15.611 7 25s7.611 17 17 17Z"></svg:path><svg:path stroke-linecap="round" d="m33 21l-2 1l-2-1m-10 0l-2 1l-2-1m9 17v6m0-36c-.25-1-2-4-6-4m6 4c.083-1 .6-3.2 2-4m5.975 36c0-6 0-9-7.975-9c-8 0-7.976 3-7.976 9M5 23v4m38-4v4"></svg:path></svg:g>`,
})
export class IconParkOutlineChildWithPacifierIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
