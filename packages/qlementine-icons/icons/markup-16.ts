import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsMarkup16Icon],svg[qlementine-icons-markup-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.99 1.67a.546.546 0 0 0-.402-.655a.535.535 0 0 0-.643.409l-2.93 12.9a.546.546 0 0 0 .402.655a.535.535 0 0 0 .643-.409zM3.84 5.16c.21.212.21.555 0 .767l-2.37 2.4a.25.25 0 0 0 0 .352l2.37 2.4c.21.212.21.555 0 .767a.53.53 0 0 1-.759 0l-2.93-2.96a.546.546 0 0 1 0-.767l2.93-2.96a.53.53 0 0 1 .759 0zm8.36 0a.546.546 0 0 0 0 .767l2.37 2.4a.25.25 0 0 1 0 .352l-2.37 2.4a.546.546 0 0 0 0 .767c.21.212.549.212.759 0l2.93-2.96a.546.546 0 0 0 0-.767l-2.93-2.96a.53.53 0 0 0-.759 0z"></svg:path>`,
})
export class QlementineIconsMarkup16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
