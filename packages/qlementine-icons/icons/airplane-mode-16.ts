import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsAirplaneMode16Icon],svg[qlementine-icons-airplane-mode-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 7h-2.47l-3.7-5.75a.534.534 0 0 0-.964.436l1.43 5a.25.25 0 0 1-.24.319h-4.07l-1.19-1.78a.5.5 0 0 0-.416-.223h-.039a.5.5 0 0 0-.475.658L1.847 8l-.78 2.34a.5.5 0 0 0 .474.658h.039a.5.5 0 0 0 .416-.223l1.19-1.78h4.07a.25.25 0 0 1 .24.319l-1.43 5a.534.534 0 0 0 .964.436L10.73 9h2.47c.749 0 1.49-.12 2.2-.356l.224-.074c.548-.182.548-.957 0-1.14l-.224-.075A7 7 0 0 0 13.2 7"></svg:path>`,
})
export class QlementineIconsAirplaneMode16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
