import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAsteriskIcon],svg[iconoir-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V2m8.572 15.55L3.428 7.249m0 10.301L20.572 7.249"></svg:path>`,
})
export class IconoirAsteriskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
