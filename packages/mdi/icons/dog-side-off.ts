import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDogSideOffIcon],svg[mdi-dog-side-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 10l-3-3l4-4v2l3 3l-2 2l-1-1zm-1 1l-3-3l-1 1h-.8l4.8 4.8zM2.39 1.73L1.11 3l6 6H5L3 7L2 8l3 3v3l-1 1v6h2v-3l2-3h5.11L15 16.89V21h2v-2.11l3.84 3.84l1.27-1.27z"></svg:path>`,
})
export class MdiDogSideOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
