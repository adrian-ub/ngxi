import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMicrosoftIcon],svg[proicons-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3.75H5.75a2 2 0 0 0-2 2V12M12 3.75h6.25a2 2 0 0 1 2 2V12M12 3.75v16.5m0 0h6.25a2 2 0 0 0 2-2V12M12 20.25H5.75a2 2 0 0 1-2-2V12m0 0h16.5"></svg:path>`,
})
export class ProiconsMicrosoftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
