import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGraphicsCardBoldIcon],svg[ph-graphics-card-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 44H16A12 12 0 0 0 4 56v152a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12h84a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 128H28V68h200Zm-52-12a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-56a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-96 56a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-56a16 16 0 1 1-16 16a16 16 0 0 1 16-16"></svg:path>`,
})
export class PhGraphicsCardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
