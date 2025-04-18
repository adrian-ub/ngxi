import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsMouseCursor16Icon],svg[qlementine-icons-mouse-cursor-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.89.188a.505.505 0 0 0-.555-.16a.5.5 0 0 0-.334.472v13a.5.5 0 0 0 .625.484a.5.5 0 0 0 .254-.16l2.44-2.85l1.71 4.7a.497.497 0 0 0 .641.3a.497.497 0 0 0 .299-.641l-1.73-4.75l4.21.42a.502.502 0 0 0 .548-.542a.5.5 0 0 0-.108-.268l-8-10zm.11 12v-10.2l6.37 7.96l-3.82-.383a.5.5 0 0 0-.43.173L5 12.208z"></svg:path>`,
})
export class QlementineIconsMouseCursor16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
