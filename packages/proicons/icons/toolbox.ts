import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsToolboxIcon],svg[proicons-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 10a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3zM8 5.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V7H8zm.5 5.5v3m7-3v3M2.75 12.5h18.5"></svg:path>`,
})
export class ProiconsToolboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
