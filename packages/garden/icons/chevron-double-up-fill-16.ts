import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronDoubleUpFill16Icon],svg[garden-chevron-double-up-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.22 7.625a1 1 0 0 1 .062-1.321l.093-.085l5-4a1 1 0 0 1 1.147-.072l.103.072l5 4a1 1 0 0 1-1.147 1.634l-.103-.072L8 4.28l-4.375 3.5a1 1 0 0 1-1.406-.156zm0 6a1 1 0 0 1 .062-1.321l.093-.085l5-4a1 1 0 0 1 1.147-.072l.103.072l5 4a1 1 0 0 1-1.147 1.634l-.103-.072L8 10.28l-4.375 3.5a1 1 0 0 1-1.406-.156z"></svg:path>`,
})
export class GardenChevronDoubleUpFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
