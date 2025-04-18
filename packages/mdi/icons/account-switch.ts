import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAccountSwitchIcon],svg[mdi-account-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9c6 0 6 4 6 4v2h-6v-2s0-1.69-1.15-3.2c-.17-.23-.38-.45-.6-.66C14.77 9.06 15.34 9 16 9M2 13s0-4 6-4s6 4 6 4v2H2zm7 4v2h6v-2l3 3l-3 3v-2H9v2l-3-3zM8 1C6.34 1 5 2.34 5 4s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m8 0c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"></svg:path>`,
})
export class MdiAccountSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
