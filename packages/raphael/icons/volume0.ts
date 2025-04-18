import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelVolume0Icon],svg[raphael-volume0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.998 12.127v7.896h4.495l6.73 5.526l.003-18.95l-6.73 5.527z"></svg:path>`,
})
export class RaphaelVolume0Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
