import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagIrelandIcon],svg[twemoji-flag-ireland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#169B62" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z"></svg:path><svg:path fill="#EEE" d="M12 5h12v26H12z"></svg:path><svg:path fill="#FF883E" d="M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path>`,
})
export class TwemojiFlagIrelandIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
