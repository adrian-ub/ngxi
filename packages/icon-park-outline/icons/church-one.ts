import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChurchOneIcon],svg[icon-park-outline-church-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M24 4v12m-4-8h8"></svg:path><svg:path stroke-linejoin="round" d="M15 28H9a2 2 0 0 0-2 2v14m26-16h6a2 2 0 0 1 2 2v14"></svg:path><svg:path stroke-linecap="round" d="M4 44h40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 23l9-8l9 8v21H15z"></svg:path><svg:path stroke-linecap="round" d="M24 34v10m-4 0h8"></svg:path></svg:g>`,
})
export class IconParkOutlineChurchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
