import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[unjsNodeFetchNativeIcon],svg[unjs-node-fetch-native-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F2A600" d="M15.983 31c8.284 0 15-6.716 15-15s-6.716-15-15-15c-8.285 0-15 6.716-15 15s6.715 15 15 15"></svg:path><svg:path fill="#FFCC32" d="M15.008 29.8c7.745 0 14.025-6.28 14.025-14.025c0-7.746-6.28-14.025-14.026-14.025S.984 8.03.984 15.775c0 7.746 6.279 14.025 14.025 14.025"></svg:path><svg:path fill="#FFF170" d="M5.983 7.425c1.125-1.775 3.525-3.25 6.025-3.7c.625-.1 1.25-.15 1.775.05c.4.15.725.525.5.95c-.175.35-.65.5-1.025.625a11.16 11.16 0 0 0-5.75 4.35c-.5.75-1.25 2.825-2.175 2.3c-.975-.575-.775-2.375.65-4.575"></svg:path></svg:g>`,
})
export class UnjsNodeFetchNativeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
