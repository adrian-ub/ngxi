import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowReloadVerticalIcon],svg[hugeicons-arrow-reload-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.5 3.5v11c0 3.713 2.685 6.5 6.5 6.5m6.5-.5v-11C18.5 5.787 15.815 3 12 3"></svg:path><svg:path d="M21 18s-1.841 2.5-2.5 2.5S16 18 16 18M8 5.5S6.159 3 5.5 3S3 5.5 3 5.5"></svg:path></svg:g>`,
})
export class HugeiconsArrowReloadVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
