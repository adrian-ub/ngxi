import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLecternBoldIcon],svg[ph-lectern-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.87 119.06l-40-80A19.89 19.89 0 0 0 192 28H64a19.89 19.89 0 0 0-17.87 11.06l-40 80A20 20 0 0 0 24 148h92v56H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24h-20v-56h92a20 20 0 0 0 17.89-28.94ZM30.49 124l36-72h123l36 72ZM192 100a12 12 0 0 1-12 12H76a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhLecternBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
