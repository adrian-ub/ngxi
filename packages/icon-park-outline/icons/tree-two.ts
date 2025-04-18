import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTreeTwoIcon],svg[icon-park-outline-tree-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M11 24s-3 2-3 6c0 6 10 8 10 8m19-14s3 2 3 6c0 6-10 8-10 8m-6-22.001v28"></svg:path><svg:path d="M19.126 13.5a6 6 0 1 1 9.748 0"></svg:path><svg:path stroke-linejoin="round" d="M13 13s-4 2.5-4 6s3 6 3 6m23-12s4 2.5 4 6s-3 6-3 6"></svg:path></svg:g>`,
})
export class IconParkOutlineTreeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
