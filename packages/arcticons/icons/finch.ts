import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFinchIcon],svg[arcticons-finch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="16.02" cy="25.926" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.598" ry="3.411" transform="rotate(-15 16.02 25.926)"></svg:ellipse><svg:ellipse cx="33.018" cy="21.371" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.598" ry="3.411" transform="rotate(-15 33.018 21.371)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.87 33.811s-2.016-9.72 4.41-13.434s7.524 2.561 14.53.218c5.831-1.95 4.013-6.186 10.282-7.301C41.914 11.9 45.3 21.071 45.3 21.071"></svg:path><svg:circle cx="12.997" cy="35.534" r="4.127" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="40.02" cy="28.243" r="4.127" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.031 32.118s.741-8.448 6.635-2.227c0 0-.86 2.206-6.635 2.227"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.119 32.086s1.348 2.432 2.782 2.03s1.94-1.93 2.03-3.4"></svg:path>`,
})
export class ArcticonsFinchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
