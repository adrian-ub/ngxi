import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elAddressBookIcon],svg[el-address-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.008.015v1199.984H1200V987.564h-130.664V870.733H1200V658.377h-130.664V541.545H1200V329.282h-130.664V212.451H1200l-.016-212.45H0zm534.665 209.56c95.784 0 173.373 77.68 173.373 173.466c0 67.881-38.969 126.625-95.78 155.109l222.013 132.926h2.696v187.473H232.28V671.076h2.784L456.982 538.15c-56.812-28.484-95.78-87.229-95.78-155.109c0-95.785 77.68-173.466 173.466-173.466z"></svg:path>`,
})
export class ElAddressBookIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
