import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHourglass1Icon],svg[picon-hourglass1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v1h4V6L4 4M1 8V6l2-2l-2-2V0h6v2L5 4l2 2v2"></svg:path>`,
})
export class PiconHourglass1Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
