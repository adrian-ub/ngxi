import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAsteriskIcon],svg[proicons-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 3.75l.004 8.243l7.009-4.118L12.008 12l7.005 4.125l-7.009-4.118L12 20.25l-.004-8.243l-7.009 4.118L11.992 12L4.987 7.875l7.009 4.118z"></svg:path>`,
})
export class ProiconsAsteriskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
