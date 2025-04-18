import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCovidcertIcon],svg[arcticons-covidcert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.023 10.918h9.384a2.423 2.423 0 0 1 2.423 2.423V30.38m-2.501 8.807H15.508a2.423 2.423 0 0 1-2.423-2.423V19.616m16.308 6.524h-4.349v-4.35h4.35ZM18.52 30.38h10.873m-8.528 3.588h5.87"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.044 15.267h4.35v4.349h-4.35ZM18.52 21.79h4.35v4.35h-4.349Z"></svg:path><svg:circle cx="16.797" cy="13.592" r="6.775" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.886 13.936l2.458 2.463l5.334-5.53M38.836 40.73v-7.155m0 11.925c7.065-2.715 6.66-8.154 6.66-11.4v-2.46a25.2 25.2 0 0 0-6.66-1.14a25.2 25.2 0 0 0-6.66 1.14v2.46c0 3.246-.405 8.685 6.66 11.4m-3.578-8.347h7.155"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.54 42.744a21.503 21.503 0 1 1 10.959-18.97m.001.172a21.5 21.5 0 0 1-1.265 7.338"></svg:path>`,
})
export class ArcticonsCovidcertIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
