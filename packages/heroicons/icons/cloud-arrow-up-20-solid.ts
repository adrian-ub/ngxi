import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsCloudArrowUp20SolidIcon],svg[heroicons-cloud-arrow-up-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765Q4 7.875 4 7.5a4.5 4.5 0 0 1 8.362-2.31a3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsCloudArrowUp20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
