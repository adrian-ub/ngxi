import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHyperIcon],svg[simple-icons-hyper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.565 17.91H24v1.964H13.565zm-3.201-5.09l-9.187 8.003l2.86-7.004L0 11.179l9.187-8.002l-3.11 7.451z"></svg:path>`,
})
export class SimpleIconsHyperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
