import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextSuperscriptIcon],svg[proicons-text-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.75 19.25l10.5-12.5m0 12.5L4.75 6.75m12.677-1.588a1.912 1.912 0 1 1 3.263 1.352L17.81 9.75h3.359"></svg:path>`,
})
export class ProiconsTextSuperscriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
