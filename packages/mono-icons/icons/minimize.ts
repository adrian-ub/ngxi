import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsMinimizeIcon],svg[mono-icons-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.707 3.707a1 1 0 0 0-1.414-1.414L16 6.586V5a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-1.586zm-19.414 18a1 1 0 0 1 0-1.414L6.586 16H5a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1.586l-4.293 4.293a1 1 0 0 1-1.414 0"></svg:path>`,
})
export class MonoIconsMinimizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
