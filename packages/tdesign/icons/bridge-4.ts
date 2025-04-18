import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge4Icon],svg[tdesign-bridge-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2.001v2h-1.18L21 8.098V22h-2V7.901l.78-3.9h-3.56L17 7.9V22h-2V8.099L14.18 4H9.82L9 8.1V22H7V7.902l.78-3.9H4.22L5 7.9V22H3V8.099L2.18 4L1 4.001v-2z"></svg:path>`,
})
export class TdesignBridge4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
