import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBambulabIcon],svg[simple-icons-bambulab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.662 24V8.959l8.535 3.369V24zm-9.859-.003v-7.521l8.534-3.371l-.001 10.892zM2.803 0h8.533l.001 11.672l-8.534 3.369zm9.859 0h8.535v10.892l-8.535-3.371z"></svg:path>`,
})
export class SimpleIconsBambulabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
