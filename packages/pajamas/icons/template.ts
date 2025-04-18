import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasTemplateIcon],svg[pajamas-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 2.5h-11V5h11zm0 4h-7v7h7zM5 6.5H2.5v7H5zM2.5 1H1v14h14V1z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasTemplateIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
