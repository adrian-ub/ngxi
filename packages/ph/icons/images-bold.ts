import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phImagesBoldIcon],svg[ph-images-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 88a16 16 0 1 1 16 16a16 16 0 0 1-16-16m76-32v104a20 20 0 0 1-20 20h-12v20a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V88a20 20 0 0 1 20-20h20V56a20 20 0 0 1 20-20h136a20 20 0 0 1 20 20m-56 124H80a20 20 0 0 1-20-20V92H44v104h136Zm-21.66-24L124 121.66L89.66 156ZM212 60H84v67.72l25.86-25.86a20 20 0 0 1 28.28 0L192.28 156H212Z"></svg:path>`,
})
export class PhImagesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
