import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLecternDuotoneIcon],svg[ph-lectern-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 136H24a8 8 0 0 1-7.16-11.58l40-80A8 8 0 0 1 64 40h128a8 8 0 0 1 7.16 4.42l40 80A8 8 0 0 1 232 136" opacity=".2"></svg:path><svg:path d="m246.3 120.84l-40-80A15.92 15.92 0 0 0 192 32H64a15.92 15.92 0 0 0-14.3 8.84l-40 80A16 16 0 0 0 24 144h96v64H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-64h96a16 16 0 0 0 14.31-23.16ZM24 128l40-80h128l40 80Zm168-24a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h112a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhLecternDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
