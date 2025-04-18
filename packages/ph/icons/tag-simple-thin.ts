import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTagSimpleThinIcon],svg[ph-tag-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.33 125.78L197.7 57.34a12 12 0 0 0-10-5.34H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h147.72a12 12 0 0 0 10-5.34l45.63-68.44a4 4 0 0 0-.02-4.44m-52.28 68.44a4 4 0 0 1-3.33 1.78H40a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h147.72a4 4 0 0 1 3.33 1.78L235.19 128Z"></svg:path>`,
})
export class PhTagSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
