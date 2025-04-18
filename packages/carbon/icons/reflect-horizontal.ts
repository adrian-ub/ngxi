import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonReflectHorizontalIcon],svg[carbon-reflect-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.386 15.21l9-7A1 1 0 0 1 30 9v14a1 1 0 0 1-1.614.79l-9-7a1 1 0 0 1 0-1.58M17 30h-2V2h2zm-4-14a1 1 0 0 1-.386.79l-9 7A1 1 0 0 1 2 23V9a1 1 0 0 1 1.614-.79l9 7A1 1 0 0 1 13 16m-9 4.956L10.371 16L4 11.044Z"></svg:path>`,
})
export class CarbonReflectHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
