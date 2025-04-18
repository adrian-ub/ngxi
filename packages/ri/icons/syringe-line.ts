import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSyringeLineIcon],svg[ri-syringe-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.678 7.98l-1.414 1.413l-2.122-2.12l-2.121 2.12l3.536 3.536l-1.415 1.414l-.707-.707L11.071 20H5.414l-2.12 2.121l-1.415-1.414L4 18.586v-5.657l6.364-6.364l-.707-.707l1.414-1.414l3.536 3.535l2.121-2.121l-2.121-2.121l1.414-1.415zm-5.657 4.242l-4.243-4.243l-1.414 1.414l2.121 2.122l-1.414 1.414l-2.121-2.121l-1.414 1.414l2.121 2.121l-1.414 1.414l-2.121-2.121l-.122.121V18h4.243z"></svg:path>`,
})
export class RiSyringeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
