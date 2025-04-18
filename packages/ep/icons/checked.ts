import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epCheckedIcon],svg[ep-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 192h160v736H160V192h160.064v64H704zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8l-45.312-45.184L447.36 673.024zM384 192V96h256v96z"></svg:path>`,
})
export class EpCheckedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
