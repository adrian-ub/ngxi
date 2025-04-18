import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidUploadIcon],svg[heroicons-solid-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 17a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M6.293 6.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L11 5.414V13a1 1 0 1 1-2 0V5.414L7.707 6.707a1 1 0 0 1-1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidUploadIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
