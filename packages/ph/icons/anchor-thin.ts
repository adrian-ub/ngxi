import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAnchorThinIcon],svg[ph-anchor-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 140a4 4 0 0 0-4 4c0 28.94-19 34.13-41.05 40.14c-14.29 3.9-29.82 8.14-38.95 20.24V124h36a4 4 0 0 0 0-8h-36V83.71a28 28 0 1 0-8 0V116H88a4 4 0 0 0 0 8h36v80.38c-9.13-12.1-24.66-16.34-38.95-20.24c-22-6-41-11.2-41-40.14a4 4 0 0 0-8 0c0 35.06 24.94 41.86 47 47.86S124 203.06 124 232a4 4 0 0 0 8 0c0-28.94 19-34.13 41.05-40.14S220 179.06 220 144a4 4 0 0 0-4-4M108 56a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhAnchorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
