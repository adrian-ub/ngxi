import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMailIconIcon],svg[subway-mail-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 206.2L326.8 21v108.9C-10.9 129.9 0 391.4 0 500.3c76.2-217.9 174.3-217.9 326.8-217.9v108.9z"></svg:path>`,
})
export class SubwayMailIconIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
