import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChurchIcon],svg[picon-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8V6H3v2m4 0H0V5l3-2V0h1v3l3 2M2 2V1h3v1"></svg:path>`,
})
export class PiconChurchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
