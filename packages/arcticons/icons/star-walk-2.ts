import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStarWalk2Icon],svg[arcticons-star-walk-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="31.006" cy="11.675" r="1.773" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="41.727" cy="13.533" r="1.773" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24.675" cy="28.39" r="1.773" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.208" cy="36.325" r="1.773" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="6.273" cy="29.065" r="1.773" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.046" cy="17.331" r="1.773" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.046 15.39v-4.981m0 8.864v4.98m1.941-6.922h4.981m-8.864 0h-4.981m-4.98 9.708l9.117-7.513m-1.266 14.773l5.064-3.715M11.675 34.13l-2.87-2.617m14.773-16.208l4.221-2.195m6.415-1.097l4.39.844M23.831 25.435l-1.013-3.039"></svg:path>`,
})
export class ArcticonsStarWalk2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
