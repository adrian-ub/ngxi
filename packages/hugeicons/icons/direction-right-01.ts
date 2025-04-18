import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDirectionRight01Icon],svg[hugeicons-direction-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.852 5.68c-.678-.827-1.018-1.24-1.48-1.46C15.907 4 15.377 4 14.318 4H9v7h5.319c1.059 0 1.589 0 2.052-.22s.803-.633 1.48-1.46l.27-.326C18.706 8.28 19 7.922 19 7.5s-.293-.78-.88-1.494zM9 3v18m-4 0h8" color="currentColor"></svg:path>`,
})
export class HugeiconsDirectionRight01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
