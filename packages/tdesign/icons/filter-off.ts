import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilterOffIcon],svg[tdesign-filter-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1.586L21.414 20L20 21.414l-5.5-5.5V21h-5v-8.182L4.933 6.347L1.586 3zm8.5 11.328V19h1v-5.086zM6.545 3H21.43l-6.034 8.549l-1.634-1.153L17.57 5H9.51l-.899.018z"></svg:path>`,
})
export class TdesignFilterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
