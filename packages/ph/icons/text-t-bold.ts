import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextTBoldIcon],svg[ph-text-t-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 56v32a12 12 0 0 1-24 0V68h-48v120h20a12 12 0 0 1 0 24H96a12 12 0 0 1 0-24h20V68H68v20a12 12 0 0 1-24 0V56a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhTextTBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
