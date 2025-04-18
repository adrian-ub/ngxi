import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiWomansHatIcon],svg[arcticons-emoji-womans-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.313 28.733a1.946 1.946 0 0 1-1.985-1.905a1.946 1.946 0 0 1 1.903-1.988c2.636-.056 3.586 2.658 3.609 3.733z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.283 28.31a1.946 1.946 0 0 0-.42-3.871c-2.621.285-3.214 3.098-3.098 4.167z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.782 24.814c-5.547.76-9.282 2.184-9.282 3.815c0 2.43 8.283 4.4 18.5 4.4s18.523-1.97 18.5-4.4c-.022-2.335-3.483-3.462-7.264-3.815"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.765 25.964a88 88 0 0 0 1.755-.122"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.162 24.427c-.39-3.952-2.193-9.494-9.256-9.455c-10.971.059-9.03 13.343-9.03 13.343s3.857.536 9.124.536c2.843 0 5.39-.144 6.765-.245"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.876 25.692s3.857.443 9.124.443q.74 0 1.44-.01"></svg:path>`,
})
export class ArcticonsEmojiWomansHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
