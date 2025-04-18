import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7BookmarkFillIcon],svg[f7-bookmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.016 53.16c1.218 0 1.851-.68 4.289-2.976l10.547-10.125c.539-.493.82-.633 1.148-.633s.656.164 1.148.633l11.977 11.53c.938.892 1.664 1.571 2.86 1.571c1.476 0 2.6-.89 2.6-3.023V10.176c0-4.875-2.413-7.336-7.265-7.336H16.68c-4.828 0-7.266 2.46-7.266 7.336v39.96c0 2.134 1.149 3.024 2.602 3.024"></svg:path>`,
})
export class F7BookmarkFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
