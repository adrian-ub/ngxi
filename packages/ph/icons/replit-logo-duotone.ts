import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phReplitLogoDuotoneIcon],svg[ph-replit-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M72 160h72v56a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8m144-64h-72v64h72a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8m-80-64H72a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h72V40a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M216 88h-64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64v48H72a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-48h64a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m-80 128H72v-48h64Zm0-176v48H72V40zm80 112h-64v-48h64Z"></svg:path></svg:g>`,
})
export class PhReplitLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
