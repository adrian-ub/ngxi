import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laChevronDownIcon],svg[la-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.906 6.594l-.718.687l-3.907 3.907l-.687.718L16 26.312l14.406-14.406l-.687-.719l-3.907-3.906l-.718-.687L16 15.687zm-.031 2.843l8.406 8.376l.719.687l.719-.688l8.406-8.375l2.438 2.438L16 23.469L4.437 11.875z"></svg:path>`,
})
export class LaChevronDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
