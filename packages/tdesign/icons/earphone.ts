import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignEarphoneIcon],svg[tdesign-earphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4.411 0-8 3.605-8 8.067V13h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H2v-8.933C2 6.514 6.47 2 12 2s10 4.514 10 10.067V21h-4a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h2v-.933C20 7.605 16.411 4 12 4m8 11h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2zM4 15v4h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"></svg:path>`,
})
export class TdesignEarphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
