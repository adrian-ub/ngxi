import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyRakutenMobileIcon],svg[arcticons-my-rakuten-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.316 4.5h19.368a4.207 4.207 0 0 1 4.217 4.215v30.57a4.207 4.207 0 0 1-4.217 4.215H14.316a4.207 4.207 0 0 1-4.217-4.215V8.715A4.207 4.207 0 0 1 14.316 4.5"></svg:path><svg:path d="M14.266 7.137h19.468c.584 0 1.055.47 1.055 1.053v27.83c0 .584-.47 1.054-1.055 1.054H14.266c-.584 0-1.055-.47-1.055-1.054V8.19c0-.583.47-1.053 1.055-1.053m7.86 31.731h3.748c.73 0 1.318.522 1.318 1.169s-.588 1.168-1.318 1.168h-3.748c-.73 0-1.318-.52-1.318-1.168s.588-1.169 1.318-1.169"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.994 25.326V14.705h3.549c2.047 0 3.684 1.593 3.684 3.585s-1.637 3.584-3.684 3.584h-3.549m3.682-.003l3.415 3.322m4.168 2.438L18.85 29.506l-2.108-1.875z"></svg:path>`,
})
export class ArcticonsMyRakutenMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
