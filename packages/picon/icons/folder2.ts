import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFolder2Icon],svg[picon-folder2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3L0 7l2-3h5l.5-1M0 7V1h3l1 1h4L6 7"></svg:path>`,
})
export class PiconFolder2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
