import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feSmilePlusIcon],svg[fe-smile-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 22a8 8 0 1 1 0-16a8 8 0 0 1 0 16m0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12m3-5a3 3 0 0 1-6 0zm-5-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8-9h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0V6h-1a1 1 0 0 1 0-2h1V3a1 1 0 0 1 2 0z"></svg:path>`,
})
export class FeSmilePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
