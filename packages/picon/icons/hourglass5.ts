import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHourglass5Icon],svg[picon-hourglass5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 4l2-2V1H2v1M1 8V6l2-2l-2-2V0h6v2L5 4l2 2v2"></svg:path>`,
})
export class PiconHourglass5Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
