import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCooperateIcon],svg[tdesign-cooperate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.586l3 3l3-3l8.914 8.914L12 22.414L.086 10.5zM10.586 6L9 4.414L2.914 10.5L12 19.586l.954-.954l-2.368-2.369L12 14.85l2.368 2.369l.955-.955l-2.369-2.368l1.414-1.414l2.369 2.368l1.349-1.349L15 10.414l-3 3L7.586 9zm8.914 6.086l1.586-1.586L15 4.414L10.414 9L12 10.586l3-3z"></svg:path>`,
})
export class TdesignCooperateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
