import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHistorySettingIcon],svg[tdesign-history-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.5a8.46 8.46 0 0 0-4.026 1.012A8.55 8.55 0 0 0 4.787 7.5H8.5v2h-7v-7h2v3.334a10.55 10.55 0 0 1 3.525-3.083A10.46 10.46 0 0 1 12 1.5c5.799 0 10.5 4.701 10.5 10.5v1h-2v-1A8.5 8.5 0 0 0 12 3.5M13 6v5.586l1.664 1.664l-1.414 1.414l-2.25-2.25V6zm-9.558 5.901l.104.995A8.5 8.5 0 0 0 12 20.5h1v2h-1c-5.427 0-9.89-4.115-10.443-9.396l-.104-.994zM19.5 14.005v1.14c.533.159 1.013.44 1.406.813l.989-.57l1 1.731l-.99.572a3.5 3.5 0 0 1 0 1.623l.99.571l-1 1.732l-.992-.572a3.5 3.5 0 0 1-1.403.81V23h-2v-1.145a3.5 3.5 0 0 1-1.404-.81l-.992.572l-1-1.732l.99-.572a3.5 3.5 0 0 1 0-1.622l-.99-.571l1-1.732l.99.57a3.5 3.5 0 0 1 1.406-.813v-1.14zM18.5 17a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class TdesignHistorySettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
