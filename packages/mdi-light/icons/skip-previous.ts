import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightSkipPreviousIcon],svg[mdi-light-skip-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.6 12.5L18 6v13l-1-.62zm1.9 0l7.5 4.7V7.8zM5 6h1v13H5z"></svg:path>`,
})
export class MdiLightSkipPreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
