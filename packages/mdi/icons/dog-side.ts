import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDogSideIcon],svg[mdi-dog-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 3l-4 4l3 3l1-1l1 1l2-2l-3-3zM3 7L2 8l3 3v3l-1 1v6h2v-3l2-3h7v6h2V11l-3-3l-1 1H5z"></svg:path>`,
})
export class MdiDogSideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
