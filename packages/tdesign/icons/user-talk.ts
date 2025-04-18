import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserTalkIcon],svg[tdesign-user-talk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m12.983 5.482l.603.798a7 7 0 0 1-.003 8.44l-.603.798l-1.595-1.206l.603-.798a5 5 0 0 0 .002-6.029l-.603-.798zM8 16a4 4 0 0 0-4 4h9.05v2H2v-2a6 6 0 0 1 6-6h5v2zm8.19-.91l.603.799a3.5 3.5 0 0 1-.001 4.22l-.604.798l-1.595-1.206l.604-.798a1.5 1.5 0 0 0 0-1.809l-.602-.798z"></svg:path>`,
})
export class TdesignUserTalkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
