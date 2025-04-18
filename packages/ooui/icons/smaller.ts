import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiSmallerIcon],svg[ooui-smaller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h-1.05a.44.44 0 0 1-.29-.09a.6.6 0 0 1-.17-.22l-.7-1.84H6.2l-.7 1.84a.56.56 0 0 1-.16.21a.43.43 0 0 1-.29.1H4l3.31-8.35h1.38zm-2.57-3.13L8.28 9.82a9 9 0 0 1-.28-.9q-.06.27-.14.5l-.14.4l-1.15 3zM15 6l3-4h-6z"></svg:path>`,
})
export class OouiSmallerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
