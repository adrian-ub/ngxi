import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKitchenKnifeIcon],svg[openmoji-kitchen-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-miterlimit="10" stroke-width="2"><svg:path fill="#3F3F3F" stroke="#3F3F3F" d="M24.272 30.108c-3.545-.267-13.737-.805-18.656 0c0 0-1.386.756 0 4.63c0 0 1.257.547 3 .547c1.49 0 12.87 1.538 15.656 1.108"></svg:path><svg:path fill="#3F3F3F" d="M20.483 30.108c-3.545-.267-10.948-.805-15.867 0c0 0-1.386 1.756 0 5.63c0 0 2.257-.453 4-.453c1.49 0 9.445 1.19 12.232.759"></svg:path><svg:path fill="#D0CFCE" d="M24.272 39.85h9.344c32 0 31.95-9.742 31.95-9.742H24.272z"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M20.483 30.108c-3.545-.267-10.948-.805-15.867 0c0 0-1.386 1.756 0 5.63c0 0 2.257-.453 4-.453c1.49 0 9.445 1.19 12.232.759m3.424 3.806h9.344c32 0 31.95-9.742 31.95-9.742H24.272z"></svg:path>`,
})
export class OpenmojiKitchenKnifeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
