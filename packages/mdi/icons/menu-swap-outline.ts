import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMenuSwapOutlineIcon],svg[mdi-menu-swap-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3.5l-6 6V11h12V9.5zm0 2.83L14.67 9H9.33zM6 13v1.5l6 6l6-6V13zm3.33 2h5.34L12 17.67z"></svg:path>`,
})
export class MdiMenuSwapOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
