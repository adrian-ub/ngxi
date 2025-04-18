import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNpoRadio5Icon],svg[arcticons-npo-radio-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="3.246" height="4.305" x="15.34" y="14.627" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.04" transform="rotate(-45 16.963 16.78)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.214 24.573l-2.308-2.308a1.04 1.04 0 0 0-1.47-.003l-.003.003l-.83.822a1.05 1.05 0 0 0 0 1.474l2.316 2.308"></svg:path><svg:rect width="3.246" height="4.305" x="11.628" y="18.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.04" transform="rotate(-45 13.251 20.492)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.73 21.263l3.45 3.444M24 30.028l-6.598 6.598a1.276 1.276 0 0 1-1.804 0L3.874 24.902a1.276 1.276 0 0 1 0-1.804l11.724-11.724a1.276 1.276 0 0 1 1.804 0L24 17.972"></svg:path><svg:rect width="19.132" height="19.132" x="21.934" y="14.434" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.276" transform="rotate(-45 31.5 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28 28h7v-4h-7v-4h7"></svg:path>`,
})
export class ArcticonsNpoRadio5Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
