import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMisuseAltIcon],svg[carbon-misuse-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.41 23L16 17.591L10.59 23L9 21.41L14.409 16L9 10.591L10.591 9L16 14.409L21.409 9L23 10.591L17.591 16L23 21.41L21.41 23z"></svg:path><svg:path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12.014 12.014 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Z"></svg:path>`,
})
export class CarbonMisuseAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
