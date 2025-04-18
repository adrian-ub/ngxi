import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowTopRightIcon],svg[material-symbols-light-arrow-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19V8.5h11.079l-3.792-3.786L14 4l5 5l-5.006 5.006l-.707-.714L17.079 9.5H7V19z"></svg:path>`,
})
export class MaterialSymbolsLightArrowTopRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
