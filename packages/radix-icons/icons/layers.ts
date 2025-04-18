import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsLayersIcon],svg[radix-icons-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.754.82a.5.5 0 0 0-.508 0l-5.5 3.25a.5.5 0 0 0 0 .86l5.5 3.25a.5.5 0 0 0 .508 0l5.5-3.25a.5.5 0 0 0 0-.86zM7.5 7.17L2.983 4.5L7.5 1.83l4.517 2.67zm-5.93.326a.5.5 0 0 1 .684-.176l5.246 3.1l5.246-3.1a.5.5 0 1 1 .508.86l-5.5 3.25a.5.5 0 0 1-.508 0l-5.5-3.25a.5.5 0 0 1-.177-.684m0 3a.5.5 0 0 1 .684-.177l5.246 3.1l5.246-3.1a.5.5 0 0 1 .508.861l-5.5 3.25a.5.5 0 0 1-.508 0l-5.5-3.25a.5.5 0 0 1-.177-.684" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsLayersIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
