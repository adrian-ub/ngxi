import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoundCircleIcon],svg[hugeicons-pound-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M15.07 10.234c-.041-.58-.348-1.985-1.528-2.504c-1.475-.649-3.416.168-3.598 2.271c-.085.987.393 2.022 1.087 2.533c.639.47 1.607.446 2.511.446H8.526m3.03 0c-.17.69-1.103 2.672-2.59 3.499h5.411c.21 0 .8.054 1.636-.546"></svg:path></svg:g>`,
})
export class HugeiconsPoundCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
