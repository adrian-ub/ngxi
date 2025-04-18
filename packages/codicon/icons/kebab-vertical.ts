import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconKebabVerticalIcon],svg[codicon-kebab-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.444 13.832a1 1 0 1 0 1.111-1.663a1 1 0 0 0-1.11 1.662zM8 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0-5a1 1 0 1 1 0-2a1 1 0 0 1 0 2" clip-rule="evenodd"></svg:path>`,
})
export class CodiconKebabVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
