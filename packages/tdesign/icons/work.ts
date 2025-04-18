import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWorkIcon],svg[tdesign-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.5h9v4H22v15H2v-15h5.5zm2 4h5v-2h-5zM4 8.5v11h16v-11z"></svg:path>`,
})
export class TdesignWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
