import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkCheckedFilledIcon],svg[tdesign-bookmark-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.403 5.06l3.536 3.536l5.657-5.657l-1.415-1.414l-4.242 4.243l-2.121-2.122z"></svg:path><svg:path fill="currentColor" d="M12.5 5c0-.706.133-1.38.375-2H4v19.943l8-5.714l8 5.714V10.125A5.5 5.5 0 0 1 12.5 5"></svg:path>`,
})
export class TdesignBookmarkCheckedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
