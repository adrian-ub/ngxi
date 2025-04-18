import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightResumeOutlineIcon],svg[material-symbols-light-resume-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.23 16.616V7.385h1v9.23zm3.386 0L18.327 12l-7.712-4.615zm1-1.814V9.198L16.298 12zm0-2.802"></svg:path>`,
})
export class MaterialSymbolsLightResumeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
