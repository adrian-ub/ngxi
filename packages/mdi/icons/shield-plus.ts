import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldPlusIcon],svg[mdi-shield-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20v2.97h-2V20h-3v-2h3v-3h2v3h3v2zM12 1l9 4v6c0 .9-.1 1.78-.29 2.65A5.8 5.8 0 0 0 18 13a6 6 0 0 0-6 6c0 1.36.45 2.62 1.22 3.62L12 23c-5.16-1.26-9-6.45-9-12V5z"></svg:path>`,
})
export class MdiShieldPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
