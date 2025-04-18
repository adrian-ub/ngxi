import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBulletproofVestIcon],svg[hugeicons-bulletproof-vest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.498 2h-2.995c-1.618 0-2.427 0-2.98.49c-1.142 1.013-.997 3.682-1.201 5.144A1.57 1.57 0 0 1 4.782 9a.776.776 0 0 0-.753.604c-.7 2.978-2.098 8.767.386 11.254C5.555 22 7.065 22 10.084 22h3.832c3.019 0 4.528 0 5.67-1.142c2.483-2.487 1.085-8.276.385-11.254A.776.776 0 0 0 19.219 9a1.57 1.57 0 0 1-1.54-1.366c-.205-1.462-.06-4.131-1.203-5.145C15.925 2 15.116 2 13.498 2M5 14H3.5M5 18H3.5m17-4H19m1.5 4H19"></svg:path><svg:path d="M9.58 13.58c.775-.774 4.065-.774 4.84 0c.774.775.774 4.065 0 4.84c-.775.773-4.065.773-4.84 0c-.774-.775-.774-4.065 0-4.84M15 2a3 3 0 1 1-6 0"></svg:path></svg:g>`,
})
export class HugeiconsBulletproofVestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
