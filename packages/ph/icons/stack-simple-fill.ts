import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStackSimpleFillIcon],svg[ph-stack-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12 111l112 64a8 8 0 0 0 7.94 0l112-64a8 8 0 0 0 0-13.9l-112-64a8 8 0 0 0-7.94 0l-112 64a8 8 0 0 0 0 13.9"></svg:path><svg:path d="m236 137.05l-108 61.74l-108-61.74A8 8 0 1 0 12 151l112 64a8 8 0 0 0 7.94 0l112-64a8 8 0 1 0-7.94-13.9Z"></svg:path></svg:g>`,
})
export class PhStackSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
