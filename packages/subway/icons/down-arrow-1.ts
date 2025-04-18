import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDownArrow1Icon],svg[subway-down-arrow-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M283.7 298.7V0h-85.4v298.7h-128L241 512l170.7-213.3z"></svg:path>`,
})
export class SubwayDownArrow1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
