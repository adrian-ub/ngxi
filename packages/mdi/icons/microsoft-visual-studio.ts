import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftVisualStudioIcon],svg[mdi-microsoft-visual-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 8.5l-4.75 3.82L17 16zM4.7 18.4L2 16.7v-9l3-1l4.3 3.33L18 2l4 2.5V20l-5 2l-7.66-7.34zM5 14l1.86-1.72L5 10.5z"></svg:path>`,
})
export class MdiMicrosoftVisualStudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
