import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsBookmarkIcon],svg[ls-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39 14h495c40 0 71 34 71 75v506c0 50-31 85-77 85H43c-31 0-43-24-43-38V51c0-18 14-37 39-37m95 624h394c22 0 35-16 35-43V89c0-15-12-33-29-33h-47v383l-138-44l-134 44V56h-81zm144-422v37h55v56h37v-56h55v-37h-55v-56h-37v56z"></svg:path>`,
})
export class LsBookmarkIcon {
  readonly viewBox = input("0 0 605 680")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
