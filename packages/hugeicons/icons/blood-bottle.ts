import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBloodBottleIcon],svg[hugeicons-blood-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 5V2m3 0H9c-2.357 0-3.536 0-4.268.732S4 4.643 4 7v15"></svg:path><svg:path d="M8 11.125c0-2.458 0-3.687.578-4.57c.25-.382.571-.71.946-.965C10.389 5 11.592 5 14 5s3.611 0 4.476.59c.375.255.696.583.946.966c.578.882.578 2.111.578 4.569v1.75c0 2.458 0 3.687-.578 4.57a3.5 3.5 0 0 1-.946.965C17.612 19 16.408 19 14 19s-3.611 0-4.476-.59a3.5 3.5 0 0 1-.946-.965C8 16.562 8 15.333 8 12.875z"></svg:path><svg:path d="M8 10.372c6.857-4.13 5.571 2.633 12 0M11 22a3 3 0 0 0 3-3"></svg:path></svg:g>`,
})
export class HugeiconsBloodBottleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
