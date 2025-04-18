import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowImportIcon],svg[proicons-arrow-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 12h12.927M10.02 6.222l4.717 4.717c.293.293.44.677.44 1.061m-5.157 5.778l4.717-4.717c.293-.293.44-.677.44-1.061m5.573-7.905v15.81"></svg:path>`,
})
export class ProiconsArrowImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
