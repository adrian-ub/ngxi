import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laWindowCloseSolidIcon],svg[la-window-close-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4.688 3.313l-1.407 1.406L14.562 16l-4.343 4.344l1.406 1.406l4.344-4.344l4.312 4.313l1.407-1.407L17.375 16l4.25-4.25l-1.406-1.406l-4.25 4.25z"></svg:path>`,
})
export class LaWindowCloseSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
