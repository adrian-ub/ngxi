import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineNavigationIcon],svg[ic-outline-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7.27l4.28 10.43l-3.47-1.53l-.81-.36l-.81.36l-3.47 1.53zM12 2L4.5 20.29l.71.71L12 18l6.79 3l.71-.71z"></svg:path>`,
})
export class IcOutlineNavigationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
