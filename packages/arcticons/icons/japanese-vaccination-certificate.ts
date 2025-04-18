import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJapaneseVaccinationCertificateIcon],svg[arcticons-japanese-vaccination-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.728 30.031h8.903v8.903h-8.903z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.125 32.428h4.109v4.109h-4.109zm9.245-14.039h8.903v8.903H25.37z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.767 20.786h4.109v4.109h-4.109z"></svg:path><svg:rect width="13.457" height="6.084" x="17.453" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.064"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.431 7.643h-5.52V43.5h30.177V7.643H33.81v2.659c0 2.179-1.108 3.223-2.7 3.223H17.253c-1.685 0-2.82-.667-2.82-2.82Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.728 18.389h8.903v8.903h-8.903z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.125 20.786h4.109v4.109h-4.109zm9.245 15.317h2.968v2.968H25.37zm2.967-3.109h2.968v2.968h-2.968zm2.968 3.109h2.968v2.968h-2.968z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.37 30.168h2.968v2.968H25.37zm5.935 0h2.968v2.968h-2.968z"></svg:path>`,
})
export class ArcticonsJapaneseVaccinationCertificateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
