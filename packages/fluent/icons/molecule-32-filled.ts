import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMolecule32FilledIcon],svg[fluent-molecule-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16a7 7 0 1 0-6.406-4.174l-2.83 2.2a5.5 5.5 0 1 0-.269 7.252l4.776 2.68a4.5 4.5 0 1 0 1.09-1.682l-4.775-2.679A5.5 5.5 0 0 0 14 17.5c0-.59-.093-1.16-.266-1.694l2.929-2.277A6.99 6.99 0 0 0 22 16"></svg:path>`,
})
export class FluentMolecule32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
