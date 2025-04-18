import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMaleCondomNegativeIcon],svg[healthicons-male-condom-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsMaleCondomNegative0)" clip-rule="evenodd"><svg:path d="M19.67 26.5a5 5 0 1 0 8.66-5a5 5 0 0 0-8.66 5m1.576-.91a3.18 3.18 0 1 0 5.51-3.181a3.18 3.18 0 0 0-5.51 3.18"></svg:path><svg:path d="M28.502 31.795a9 9 0 1 1-9-15.589a9 9 0 0 1 9 15.589m-1-1.735a6.999 6.999 0 1 1-6.999-12.122a6.999 6.999 0 0 1 7 12.122"></svg:path><svg:path d="M48 0H0v48h48zM31.994 7.14L27.886 6L7.09 18.517L6 22.787l2.733.764l-.732 2.85l2.733.763l-.732 2.85l2.733.764l-.732 2.85l2.733.763l-.732 2.85l2.734.764l-.733 2.85l4.1 1.145l20.788-12.512L42 25.208l-2.734-.764l.733-2.85l-2.734-.763l.733-2.85l-2.734-.764l.732-2.85l-2.733-.763l.733-2.85l-2.734-.764z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMaleCondomNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMaleCondomNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
