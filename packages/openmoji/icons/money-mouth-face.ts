import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMoneyMouthFaceIcon],svg[openmoji-money-mouth-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="24" fill="#fcea2b"></svg:circle><svg:path fill="#fff" d="M30.498 53.374c-4.296-1.49-6.461-4.801-6.461-8.683h.094s12.137 3.062 23.683.065l.16-.065a8.88 8.88 0 0 1-6.415 8.684"></svg:path><svg:path fill="#b1cc33" d="M40.538 49.289s1.518 8.819-1.064 10.94l.025-.023a4.884 4.884 0 0 1-7.008 0c-2.583-2.12-1.065-10.939-1.065-10.939"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M30.498 53.374c-4.296-1.49-6.461-4.801-6.461-8.683h.094s12.137 3.062 23.683.065l.16-.065a8.88 8.88 0 0 1-6.415 8.684M20.28 27.2a6.3 6.3 0 0 1 3.39-3a6.3 6.3 0 0 1 4.53-.42m22.69 3.42a7.19 7.19 0 0 0-7.91-3.43"></svg:path><svg:path d="M44.324 57.447a23 23 0 1 0-16.59.023"></svg:path><svg:path d="M20.28 27.2a6.3 6.3 0 0 1 3.39-3a6.3 6.3 0 0 1 4.53-.42m22.69 3.42a7.19 7.19 0 0 0-7.91-3.43m-2.442 25.519s1.518 8.819-1.064 10.94l.025-.023a4.884 4.884 0 0 1-7.008 0c-2.583-2.12-1.065-10.939-1.065-10.939M29.23 31.55a1.935 1.935 0 0 0-1.95-1.267h0a1.823 1.823 0 0 0-1.992 1.586a1.823 1.823 0 0 0 1.991 1.585l-.04.006a1.823 1.823 0 0 1 1.991 1.586a1.823 1.823 0 0 1-1.991 1.585h0a1.935 1.935 0 0 1-1.95-1.266m1.97-5.081v-1.512m0 9.37v-1.511m19.008-5.081a1.935 1.935 0 0 0-1.95-1.267h0a1.823 1.823 0 0 0-1.992 1.586a1.823 1.823 0 0 0 1.991 1.585l-.04.006a1.823 1.823 0 0 1 1.991 1.586a1.823 1.823 0 0 1-1.99 1.585h0a1.935 1.935 0 0 1-1.951-1.266m1.97-5.081v-1.512m0 9.37v-1.511"></svg:path><svg:path d="M37.897 53.146a1.935 1.935 0 0 0-1.95-1.266h0a1.627 1.627 0 1 0 0 3.17l-.04.007a1.627 1.627 0 1 1 0 3.17h0a1.935 1.935 0 0 1-1.951-1.265m1.97-5.082v-1.511m0 9.37v-1.511"></svg:path></svg:g>`,
})
export class OpenmojiMoneyMouthFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
