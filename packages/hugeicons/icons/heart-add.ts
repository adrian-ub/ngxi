import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHeartAddIcon],svg[hugeicons-heart-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21c-1.341 0-2.114-.572-3.66-1.717C.222 13.275 1.018 6.153 4.537 3.994c2.682-1.645 5.023-.982 6.429.074c.576.433.864.65 1.034.65s.458-.217 1.034-.65c1.406-1.056 3.747-1.719 6.429-.074C21.18 5.048 22.25 7.286 21.949 10M14 17h8m-4-4v8" color="currentColor"></svg:path>`,
})
export class HugeiconsHeartAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
