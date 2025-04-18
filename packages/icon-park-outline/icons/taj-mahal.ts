import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTajMahalIcon],svg[icon-park-outline-taj-mahal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M16 28H8a2 2 0 0 0-2 2v14m26-16h8a2 2 0 0 1 2 2v14M20 24h8s5.165-5.678 4-9c-.755-2.15-2.439-3.34-4-5c-1.563-1.66-4-4-4-4s-2.439 2.34-4 4c-1.563 1.66-3.246 2.85-4 5c-1.166 3.322 4 9 4 9Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44h40M16 24h16v20H16z"></svg:path><svg:path stroke-linecap="round" d="M24 34v10m0-40v3M10 24v4m28-4v4M20 44h8"></svg:path></svg:g>`,
})
export class IconParkOutlineTajMahalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
