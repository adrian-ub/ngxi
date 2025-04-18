import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsConferenceCallIcon],svg[flat-color-icons-conference-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="21" r="5" fill="#FFA726"></svg:circle><svg:path fill="#455A64" d="M2 34.7s2.8-6.3 10-6.3s10 6.3 10 6.3V38H2zm44 0s-2.8-6.3-10-6.3s-10 6.3-10 6.3V38h20z"></svg:path><svg:circle cx="24" cy="17" r="6" fill="#FFB74D"></svg:circle><svg:path fill="#607D8B" d="M36 34.1s-3.3-7.5-12-7.5s-12 7.5-12 7.5V38h24z"></svg:path><svg:circle cx="36" cy="21" r="5" fill="#FFA726"></svg:circle><svg:circle cx="12" cy="21" r="5" fill="#FFA726"></svg:circle><svg:circle cx="36" cy="21" r="5" fill="#FFA726"></svg:circle>`,
})
export class FlatColorIconsConferenceCallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
