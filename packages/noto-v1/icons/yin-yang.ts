import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1YinYangIcon],svg[noto-v1-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="64" cy="64" r="61.5" fill="#2f2f2f" stroke="#464747" stroke-miterlimit="10" stroke-width="4"></svg:circle><svg:g stroke="#4589f1" stroke-miterlimit="10" stroke-width="8"><svg:circle cx="64" cy="64" r="48.47" fill="none"></svg:circle><svg:path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M64 7.43v113.14M24 24l80 80M7.43 64h113.14M24 104l80-80"></svg:path><svg:circle cx="64" cy="64" r="10.09" fill="#fff"></svg:circle></svg:g><svg:circle cx="64" cy="64" r="61.5" fill="#2f2f2f"></svg:circle><svg:circle cx="34.48" cy="64.02" r="7.15" fill="#fff"></svg:circle><svg:path fill="#fff" d="M10.08 64c-.02-29.78 24.11-53.93 53.88-53.95c29.78-.02 53.93 24.1 53.95 53.88c.01 14.89-12.05 26.97-26.94 26.98c-14.88.01-26.31-11.97-26.97-26.95c-.65-14.73-12.09-26.95-26.98-26.94S10.07 49.11 10.08 64"></svg:path><svg:circle cx="93.52" cy="63.98" r="7.15" fill="#2f2f2f"></svg:circle>`,
})
export class NotoV1YinYangIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
