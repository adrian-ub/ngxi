import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKeyframesMultipleIcon],svg[hugeicons-keyframes-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12.442 14.553l-2.306 2.7C9.14 18.418 8.644 19 8 19s-1.141-.582-2.136-1.747l-2.306-2.7C2.52 13.337 2 12.728 2 12s.52-1.337 1.558-2.553l2.306-2.7C6.86 5.582 7.356 5 8 5s1.141.582 2.136 1.747l2.306 2.7C13.48 10.663 14 11.272 14 12s-.52 1.337-1.558 2.553"></svg:path><svg:path d="m13 19l3.512-4.397C17.504 13.361 18 12.74 18 12s-.496-1.361-1.488-2.603L13 5"></svg:path><svg:path d="m17 19l3.512-4.397C21.504 13.361 22 12.74 22 12s-.496-1.361-1.488-2.603L17 5"></svg:path></svg:g>`,
})
export class HugeiconsKeyframesMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
