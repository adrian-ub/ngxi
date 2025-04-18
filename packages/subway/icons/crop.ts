import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayCropIcon],svg[subway-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 21.3V0h-21.3l-85.3 85.3H128V0H85.3v85.3H0V128h85.3v298.7H384V512h42.7v-85.3H512V384h-85.3V106.7zM128 128h234.7L128 362.7zm256 256H149.3L384 149.3z"></svg:path>`,
})
export class SubwayCropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
