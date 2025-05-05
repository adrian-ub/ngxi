import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCroissantIcon],svg[picon-croissant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5L2 2h4m2 4L5 5l2-2M0 6l1-3l2 2"></svg:path>`,
})
export class PiconCroissantIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
