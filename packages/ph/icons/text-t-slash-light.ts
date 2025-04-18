import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextTSlashLightIcon],svg[ph-text-t-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 220.44a6 6 0 0 1-8.48-.4L134 143.52V194h26a6 6 0 0 1 0 12H96a6 6 0 0 1 0-12h26v-63.68l-60-66V88a6 6 0 0 1-12 0V56a6 6 0 0 1 1.19-3.57L43.56 44a6 6 0 0 1 8.88-8l160 176a6 6 0 0 1-.44 8.44M105.79 62H122v18.43a6 6 0 0 0 12 0V62h60v26a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6h-94.21a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhTextTSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
