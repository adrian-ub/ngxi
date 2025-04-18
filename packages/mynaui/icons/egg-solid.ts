import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiEggSolidIcon],svg[mynaui-egg-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-1.223 0-2.337.521-3.294 1.295c-.955.773-1.79 1.827-2.477 2.98C4.864 8.817 4 11.65 4 13.8c0 4.395 3.587 7.95 8 7.95s8-3.555 8-7.95c0-2.151-.864-4.983-2.23-7.275c-.686-1.153-1.52-2.207-2.476-2.98C14.337 2.771 13.222 2.25 12 2.25"></svg:path>`,
})
export class MynauiEggSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
