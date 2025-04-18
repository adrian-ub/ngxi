import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTidalIcon],svg[simple-icons-tidal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.012 3.992L8.008 7.996L4.004 3.992L0 7.996L4.004 12l4.004-4.004L12.012 12l-4.004 4.004l4.004 4.004l4.004-4.004L12.012 12l4.004-4.004zm4.03 4.004l3.979-3.979L24 7.996l-3.979 3.979z"></svg:path>`,
})
export class SimpleIconsTidalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
