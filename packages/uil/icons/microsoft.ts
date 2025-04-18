import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilMicrosoftIcon],svg[uil-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22h9.5v-9.5H2zm0-10.5h9.5V2H2zM12.5 2v9.5H22V2zm0 20H22v-9.5h-9.5z"></svg:path>`,
})
export class UilMicrosoftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
