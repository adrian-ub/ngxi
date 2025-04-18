import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignFThinIcon],svg[iconamoon-sign-f-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 5v-.295C17 3.763 16.237 3 15.295 3v0a1.73 1.73 0 0 0-1.66 1.242L9.557 18.105A2.64 2.64 0 0 1 7.025 20H7m3.5-11H14"></svg:path>`,
})
export class IconamoonSignFThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
