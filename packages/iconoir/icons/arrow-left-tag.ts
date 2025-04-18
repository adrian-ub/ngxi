import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowLeftTagIcon],svg[iconoir-arrow-left-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.75 12h-10m0 0l2.75 2.75M6.75 12L9.5 9.25"></svg:path><svg:path d="M2 15V9a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"></svg:path></svg:g>`,
})
export class IconoirArrowLeftTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
