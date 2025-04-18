import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDairyNegativeIcon],svg[healthicons-dairy-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsDairyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 23.814C26.333 26 31 26 31 26v14.522c0 .913-.68 1.478-1.306 1.478H19.306C18.679 42 18 41.435 18 40.522V23.424c1.502-.509 4.34-1.165 6 .39M19.306 7.339L16 21.391v19.13C16 42.444 17.48 44 19.306 44h10.388C31.52 44 33 42.443 33 40.522v-19.13L29.694 7.338s.53.045.99-.232c.353-.213.663-.614.663-1.368C31.347 4 30.521 4 28.042 4h-7.084c-2.479 0-3.305 0-3.305 1.74c0 .753.31 1.154.662 1.366c.46.278.99.233.99.233" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsDairyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsDairyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
