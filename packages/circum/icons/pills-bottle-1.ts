import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumPillsBottle1Icon],svg[circum-pills-bottle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.435 2.06H6.565a2.5 2.5 0 0 0-2.5 2.5v2a1.49 1.49 0 0 0 1.22 1.47v11.41a2.5 2.5 0 0 0 2.5 2.5h8.43a2.5 2.5 0 0 0 2.5-2.5V8.03a1.49 1.49 0 0 0 1.22-1.47v-2a2.5 2.5 0 0 0-2.5-2.5m.28 17.38a1.5 1.5 0 0 1-1.5 1.5h-8.43a1.5 1.5 0 0 1-1.5-1.5v-.88h3.52a.49.49 0 0 0 .48-.5a.485.485 0 0 0-.48-.5h-3.52V15h2.57a.5.5 0 0 0 0-1h-2.57v-2.55h3.52a.49.49 0 0 0 .48-.5a.485.485 0 0 0-.48-.5h-3.52V8.06h11.43Zm1.22-12.88a.5.5 0 0 1-.5.5H5.565a.5.5 0 0 1-.5-.5v-2a1.5 1.5 0 0 1 1.5-1.5h10.87a1.5 1.5 0 0 1 1.5 1.5Z"></svg:path>`,
})
export class CircumPillsBottle1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
