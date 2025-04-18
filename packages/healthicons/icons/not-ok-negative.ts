import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsNotOkNegativeIcon],svg[healthicons-not-ok-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsNotOkNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zm-8 24c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16m2 0c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18m-12.567 7.544C28.345 30.026 26.272 29 23.893 29c-2.469 0-4.608 1.104-5.66 2.717c-.453.696-.886 2.802.767 2.283c4.813-1.6 5.28-1.542 10 0c1.317.472 1.07-1.424.674-2.115c-.048-.083-.106-.16-.164-.238zM13.631 21.35c-.119.738.381 1.445 1.065 1.883c.713.457 1.73.707 2.93.53a3.8 3.8 0 0 0 2.653-1.665c.504-.764.712-1.693.48-2.382a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.642 1.448a.5.5 0 0 0-.668.39m20.076 0c.119.738-.382 1.445-1.065 1.883c-.713.457-1.73.707-2.93.53a3.8 3.8 0 0 1-2.653-1.665c-.504-.764-.712-1.693-.48-2.382a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .668.39" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNotOkNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNotOkNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
