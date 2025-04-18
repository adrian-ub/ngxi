import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riH1Icon],svg[ri-h-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8z"></svg:path>`,
})
export class RiH1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
