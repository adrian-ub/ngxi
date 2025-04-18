import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfPackagingIcon],svg[wpf-packaging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.656.656l-1.312.688l1 2l-2-1l-.688 1.312L11.344 5H2a1 1 0 0 0-.094 0a1 1 0 0 0-.093 0A1 1 0 0 0 1 6v4a1 1 0 0 0 1 1v13a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V11a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-9.344l2.688-1.344l-.688-1.312l-2 1l1-2l-1.312-.688L13 3.344zM3 7h9v2H3.187A1 1 0 0 0 3 8.969zm11 0h9v2h-9zM4 11h8v12H4zm10 0h8v12h-8z"></svg:path>`,
})
export class WpfPackagingIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
