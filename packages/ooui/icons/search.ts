import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiSearchIcon],svg[ooui-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.2 13.6a7 7 0 1 1 1.4-1.4l5.4 5.4l-1.4 1.4zM3 8a5 5 0 1 0 10 0A5 5 0 0 0 3 8"></svg:path>`,
})
export class OouiSearchIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
