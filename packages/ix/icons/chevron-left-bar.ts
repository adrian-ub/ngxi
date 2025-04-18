import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronLeftBarIcon],svg[ix-chevron-left-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m353.858 431.023l30.17-30.17L239.13 255.938l144.898-144.915l-30.17-30.17l-175.085 175.085zM128 426.667h42.667V85.333H128z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronLeftBarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
