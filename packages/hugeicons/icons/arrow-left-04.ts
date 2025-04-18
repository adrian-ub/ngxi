import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowLeft04Icon],svg[hugeicons-arrow-left-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 12h10M5.414 13.603l.967.76c1.565 1.234 2.348 1.851 2.984 1.57c.635-.281.635-1.245.635-3.172V11.24c0-1.927 0-2.89-.635-3.172c-.636-.281-1.419.336-2.984 1.57l-.967.76C4.471 11.14 4 11.511 4 12s.471.86 1.414 1.603" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowLeft04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
