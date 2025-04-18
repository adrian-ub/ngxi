import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSwipeDown08Icon],svg[hugeicons-swipe-down-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.503 7.987V2m0 5.987c-.7 0-2.005-1.99-2.496-2.495m2.496 2.495c.699 0 2.005-1.99 2.496-2.495M5.537 14.453V9.987m0 0V4.47c0-.82.684-1.48 1.505-1.48s1.469.66 1.469 1.48v3.998m-2.974 1.52c-1.317 1.19-2.734 2.696-2.925 3.081c-.888 1.35-.795 2.002.194 3.653a41 41 0 0 0 2.037 3.034c.672.76.538.76 1.512 1.473c.869.602 2.672 1.021 6.898.602c3.443-.531 4.268-3.531 4.25-4.965v-3.541c.215-2.943-1.018-3.076-3.255-3.366M8.51 8.468v2.524m0-2.524c.558-.91 2.586-.542 2.981 1.175m.036 1.345v-1q0-.12-.015-.237m-.02-.108q0 .01.004.021q.01.044.016.087m-.02-.108q.005.052.02.108m-.02-.108c-.141-1.197 2.896-.905 3.02 1.199v1.143" color="currentColor"></svg:path>`,
})
export class HugeiconsSwipeDown08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
