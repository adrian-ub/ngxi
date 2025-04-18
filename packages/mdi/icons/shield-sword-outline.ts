import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldSwordOutlineIcon],svg[mdi-shield-sword-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9 4v6c0 5.5-3.8 10.7-9 12c-5.2-1.3-9-6.5-9-12V5zm0 2.2L5 6.3v4.9c0 4.3 3.2 8.8 7 9.8c3.8-1 7-5.5 7-9.8V6.3zm0 2.3l2 1.6l-1 5.9h2v2h-2v3h-2v-3H9v-2h2l-1-5.9z"></svg:path>`,
})
export class MdiShieldSwordOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
