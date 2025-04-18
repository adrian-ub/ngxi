import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEditOneIcon],svg[icon-park-outline-edit-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M29 4H9a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V20.005"></svg:path><svg:path d="M13 18h8m-8 10h12"></svg:path><svg:path stroke-linejoin="round" d="M41 6.001L29.003 17.996"></svg:path></svg:g>`,
})
export class IconParkOutlineEditOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
