import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTagsSolidBadgedIcon],svg[clarity-tags-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.78 19.17L14.2 5.58A1.92 1.92 0 0 0 12.83 5H3.61a1.93 1.93 0 0 0-1.93 1.93v9.22a1.92 1.92 0 0 0 .57 1.36L15.84 31.1a1.93 1.93 0 0 0 2.73 0l9.21-9.21a1.93 1.93 0 0 0 0-2.72M6.67 11.72A1.73 1.73 0 1 1 8.4 10a1.73 1.73 0 0 1-1.73 1.72" class="clr-i-solid--badged clr-i-solid-path-1--badged"></svg:path><svg:path fill="currentColor" d="M33.16 19.13L19.58 5.55A1.92 1.92 0 0 0 18.21 5h-2.09l15.63 15.45l-10.53 10.62a1.93 1.93 0 0 0 2.73 0l9.21-9.21a1.93 1.93 0 0 0 0-2.73" class="clr-i-solid--badged clr-i-solid-path-2--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTagsSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
