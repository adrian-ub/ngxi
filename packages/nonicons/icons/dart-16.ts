import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsDart16Icon],svg[nonicons-dart-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.207.13a.74.74 0 0 1 .517.55l1.199 5.397l5.396 1.2a.741.741 0 0 1 .364 1.247l-7.159 7.159a.74.74 0 0 1-.685.2L1.982 14.58a.74.74 0 0 1-.563-.563L.118 8.16a.74.74 0 0 1 .2-.685L7.475.317A.74.74 0 0 1 8.207.13m.283 6.332l-.92-4.141l-5.917 5.915l.92 4.142zm-4.868 6.964l4.142.92l5.915-5.915l-4.141-.92z"></svg:path>`,
})
export class NoniconsDart16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
