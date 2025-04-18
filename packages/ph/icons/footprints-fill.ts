import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFootprintsFillIcon],svg[ph-footprints-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.06 192v12a36 36 0 0 1-72.06 0v-12a8 8 0 0 1 8-8h56a8 8 0 0 1 8.06 8M104 160H48a8 8 0 0 0-8 8v12a36 36 0 0 0 72 0v-12a8 8 0 0 0-8-8M76 16c-11.64 0-22.93 10.31-31.8 29c-13.93 29.38-18.56 73 .29 96a8 8 0 0 0 6.2 2.93h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C98.85 26.31 87.57 16 76 16m78.8 152h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C202.93 50.31 191.64 40 180 40s-22.89 10.31-31.77 29c-13.93 29.38-18.56 73 .29 96a8 8 0 0 0 6.24 3Z"></svg:path>`,
})
export class PhFootprintsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
