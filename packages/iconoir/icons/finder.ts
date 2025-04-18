import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFinderIcon],svg[iconoir-finder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 15V9a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6"></svg:path><svg:path d="M15 3s-4.5 0-4.5 9H13c0 9 2 9 2 9"></svg:path><svg:path d="M16.5 14.5s-1.5 2-4.5 2s-4.5-2-4.5-2M7 9v2m10-2v2"></svg:path></svg:g>`,
})
export class IconoirFinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
