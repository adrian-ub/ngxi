import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOnetrackerIcon],svg[arcticons-onetracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.06" cy="33.914" r="3.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.171" cy="33.914" r="3.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.814 32.318H43.5V19.73l-5.676-4.72H30.07m2.528 17.308H22.146m-10.172 0H9.277v-3.372m0-11.801v-6.07h20.792v21.243"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.272 18.662v6.744h6.744V20.74l-2.529-2.08zm-25.4.675h10.733M6.467 23.1h10.059M4.5 26.923h10.733"></svg:path>`,
})
export class ArcticonsOnetrackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
