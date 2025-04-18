import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiToggleSwitchVariantIcon],svg[mdi-toggle-switch-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.4 1.6C18 1.2 17.5 1 17 1H7c-.5 0-1 .2-1.4.6S5 2.5 5 3v18c0 .5.2 1 .6 1.4s.9.6 1.4.6h10c.5 0 1-.2 1.4-.6s.6-.9.6-1.4V3c0-.5-.2-1-.6-1.4M16 7c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1z"></svg:path>`,
})
export class MdiToggleSwitchVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
