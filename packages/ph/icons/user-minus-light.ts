import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUserMinusLightIcon],svg[ph-user-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M254 136a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-57.41 60.14a6 6 0 1 1-9.18 7.72C166.9 179.45 138.69 166 108 166s-58.89 13.45-79.41 37.86a6 6 0 0 1-9.18-7.72C35.14 177.41 55 164.48 77 158.26a66 66 0 1 1 62 0c22 6.22 41.86 19.15 57.59 37.88M108 154a54 54 0 1 0-54-54a54.06 54.06 0 0 0 54 54"></svg:path>`,
})
export class PhUserMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
