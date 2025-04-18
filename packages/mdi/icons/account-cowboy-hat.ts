import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAccountCowboyHatIcon],svg[mdi-account-cowboy-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4v-2c0-2.2 3.6-4 8-4s8 1.8 8 4M8 9h8v1c0 2.2-1.8 4-4 4s-4-1.8-4-4m11-6c-.6 0-1 .4-1 1v1h-1.5l-1.4-3c-.1-.2-.2-.4-.4-.5c-.5-.5-1.3-.6-2-.3l-.7.2l-.7-.3c-.7-.3-1.5-.2-2 .3c-.2.2-.3.4-.4.6L7.5 6H6V5c0-.6-.4-1-1-1s-1 .4-1 1v1c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-.5-.4-1-1-1"></svg:path>`,
})
export class MdiAccountCowboyHatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
