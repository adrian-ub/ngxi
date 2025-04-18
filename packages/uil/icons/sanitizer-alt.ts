import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSanitizerAltIcon],svg[uil-sanitizer-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m2-7V5a1 1 0 0 0-1-1h-1V3h1a1 1 0 0 0 0-2h-4.764a4.59 4.59 0 0 0-4.13 2.553a1 1 0 0 0 1.789.894A2.6 2.6 0 0 1 10.235 3H12v1h-1a1 1 0 0 0-1 1v3a3.003 3.003 0 0 0-3 3v9a3.003 3.003 0 0 0 3 3h6a3.003 3.003 0 0 0 3-3v-9a3.003 3.003 0 0 0-3-3m-4-2h2v2h-2Zm5 14a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilSanitizerAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
