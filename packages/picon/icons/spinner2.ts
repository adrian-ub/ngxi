import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSpinner2Icon],svg[picon-spinner2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2.5C1-1 8-1 8 4S1 9 0 5.5L1 5c0 3 6 3 6-1S1 0 1 3"></svg:path>`,
})
export class PiconSpinner2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
