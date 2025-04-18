import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRadiofmIcon],svg[arcticons-radiofm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24h37"></svg:path><svg:circle cx="32.731" cy="33.164" r="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="15.269" cy="33.164" r="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.193 24V11.991"></svg:path><svg:circle cx="22.193" cy="10.491" r="1.5" fill="none" stroke="currentColor" stroke-miterlimit="10"></svg:circle><svg:circle cx="32.731" cy="29.776" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.269" cy="33.164" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.34" cy="33.164" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.769" cy="35.811" r=".75" fill="currentColor"></svg:circle><svg:circle cx="12.14" cy="33.164" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.64" cy="35.811" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.769" cy="30.526" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.64" cy="30.526" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.731 16.95v-4.4m-29.462 4.4v-4.4m4.91 3.2v-2m9.821 2v-2m9.821 2v-2m-14.731 3.2v-4.4m9.82 4.4v-4.4"></svg:path>`,
})
export class ArcticonsRadiofmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
