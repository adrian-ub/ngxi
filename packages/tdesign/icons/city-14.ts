import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity14Icon],svg[tdesign-city-14-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.923l-6.3 2.52l.743 1.857L7 6.077V8H1v14h22V8h-6V6.077l.557.223l.743-1.857zm3 3.354V20h-2v-5h-2v5H9V5.277l3-1.2zM7 20H3V10h4zm10 0V10h4v10zM13.004 6.998H11v2.004h2.004z"></svg:path>`,
})
export class TdesignCity14Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
