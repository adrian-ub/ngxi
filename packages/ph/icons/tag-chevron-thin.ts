import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTagChevronThinIcon],svg[ph-tag-chevron-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.33 125.78L197.7 57.34a12 12 0 0 0-10-5.34H32a4 4 0 0 0-3.33 6.22L75.19 128l-46.52 69.78A4 4 0 0 0 32 204h155.72a12 12 0 0 0 10-5.34l45.63-68.44a4 4 0 0 0-.02-4.44m-52.28 68.44a4 4 0 0 1-3.33 1.78H39.47l43.86-65.78a4 4 0 0 0 0-4.44L39.47 60h148.25a4 4 0 0 1 3.33 1.78L235.19 128Z"></svg:path>`,
})
export class PhTagChevronThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
