import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKeyframesMultipleRemoveIcon],svg[hugeicons-keyframes-multiple-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.5 6.156C7.165 5.386 7.585 5 8.1 5c.633 0 1.122.582 2.1 1.747l2.268 2.7C13.489 10.663 14 11.272 14 12s-.51 1.337-1.532 2.553l-2.268 2.7C9.222 18.418 8.733 19 8.1 19c-.515 0-.935-.386-1.6-1.156M2 12h6"></svg:path><svg:path d="m13 19l3.512-4.397C17.504 13.361 18 12.74 18 12s-.496-1.361-1.488-2.603L13 5"></svg:path><svg:path d="m17 19l3.512-4.397C21.504 13.361 22 12.74 22 12s-.496-1.361-1.488-2.603L17 5"></svg:path></svg:g>`,
})
export class HugeiconsKeyframesMultipleRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
