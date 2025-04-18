import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibQuantopianIcon],svg[cib-quantopian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m2 4v24h24V4zm3.198 14.401h3.203v6.401H7.198zM12 12h3.198v12.802H12zm4.802 3.198H20v9.604h-3.198zm4.797-8h3.198v17.604h-3.198z"></svg:path>`,
})
export class CibQuantopianIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
