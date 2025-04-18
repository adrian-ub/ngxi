import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsKeyShift16Icon],svg[qlementine-icons-key-shift-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 .5a.5.5 0 0 1 .363.156l5.36 5.66c.604.637.152 1.69-.726 1.69h-1.75a.25.25 0 0 0-.25.25v4.25a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-4.25a.25.25 0 0 0-.25-.25h-1.75c-.878 0-1.33-1.05-.726-1.69l5.36-5.66A.5.5 0 0 1 7.994.5zm.181 1.42a.25.25 0 0 0-.363 0L2.998 7h2a1 1 0 0 1 1 1v4.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V8a1 1 0 0 1 1-1h2l-4.82-5.08z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsKeyShift16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
