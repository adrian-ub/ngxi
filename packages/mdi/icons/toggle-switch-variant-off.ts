import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiToggleSwitchVariantOffIcon],svg[mdi-toggle-switch-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.6 1.6C6 1.2 6.5 1 7 1h10c.5 0 1 .2 1.4.6s.6.9.6 1.4v18c0 .5-.2 1-.6 1.4s-.9.6-1.4.6H7c-.5 0-1-.2-1.4-.6S5 21.5 5 21V3c0-.5.2-1 .6-1.4M8 3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zm0 14c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1z"></svg:path>`,
})
export class MdiToggleSwitchVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
