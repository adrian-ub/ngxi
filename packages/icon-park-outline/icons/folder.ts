import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFolderIcon],svg[icon-park-outline-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M7 6a2 2 0 0 1 2-2h30a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zm9 23h4m-4 6h10"></svg:path><svg:path d="M8 5s3.765 13 16 13S40 5 40 5"></svg:path><svg:circle cx="24" cy="18" r="4"></svg:circle><svg:path d="M15 4H9a2 2 0 0 0-2 2v6m26-8h6a2 2 0 0 1 2 2v6"></svg:path></svg:g>`,
})
export class IconParkOutlineFolderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
