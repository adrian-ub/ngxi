import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsKeyOpt16Icon],svg[qlementine-icons-key-opt-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 2.5a.5.5 0 0 1 .5-.5h3.36c.588 0 1.12.344 1.37.879l4.47 9.83a.5.5 0 0 0 .455.293h3.36a.5.5 0 0 1 0 1h-3.36c-.588 0-1.12-.344-1.37-.879l-4.47-9.83A.5.5 0 0 0 4.86 3H1.5a.5.5 0 0 1-.5-.5m9 0a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsKeyOpt16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
