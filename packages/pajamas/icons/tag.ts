import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasTagIcon],svg[pajamas-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.172 5.5a.5.5 0 0 1 .353.146l1.06-1.06l-1.06 1.06L13.88 8l-2.354 2.354a.5.5 0 0 1-.353.146H2a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5zm3.767 1.44l-2.353-2.354A2 2 0 0 0 11.172 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h9.172a2 2 0 0 0 1.414-.586l2.353-2.353L16 8zm-8.189.31a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasTagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
