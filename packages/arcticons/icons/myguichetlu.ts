import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyguichetluIcon],svg[arcticons-myguichetlu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:ellipse cx="23.973" cy="24.036" rx="3.896" ry="3.98"></svg:ellipse><svg:ellipse cx="12.781" cy="19.872" rx="2.514" ry="2.479"></svg:ellipse><svg:ellipse cx="13.234" cy="28.934" rx="2.514" ry="2.479"></svg:ellipse><svg:ellipse cx="19.984" cy="35.15" rx="2.514" ry="2.479"></svg:ellipse><svg:ellipse cx="29.08" cy="34.674" rx="2.514" ry="2.479"></svg:ellipse><svg:ellipse cx="35.311" cy="27.964" rx="2.514" ry="2.479"></svg:ellipse><svg:ellipse cx="34.846" cy="18.867" rx="2.514" ry="2.479"></svg:ellipse><svg:ellipse cx="28.097" cy="12.793" rx="2.514" ry="2.479"></svg:ellipse><svg:ellipse cx="18.989" cy="13.09" rx="2.514" ry="2.479"></svg:ellipse><svg:ellipse cx="43.958" cy="23.969" rx="1.52" ry="1.557"></svg:ellipse><svg:ellipse cx="4.043" cy="24.033" rx="1.52" ry="1.557"></svg:ellipse><svg:ellipse cx="9.904" cy="38.127" rx="1.52" ry="1.557"></svg:ellipse><svg:ellipse cx="23.978" cy="43.943" rx="1.52" ry="1.557"></svg:ellipse><svg:ellipse cx="23.927" cy="4.057" rx="1.52" ry="1.557"></svg:ellipse><svg:ellipse cx="38.067" cy="9.837" rx="1.52" ry="1.557"></svg:ellipse><svg:ellipse cx="9.905" cy="9.931" rx="1.52" ry="1.557"></svg:ellipse><svg:ellipse cx="38.149" cy="38.065" rx="1.52" ry="1.557"></svg:ellipse></svg:g>`,
})
export class ArcticonsMyguichetluIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
