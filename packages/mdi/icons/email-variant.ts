import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEmailVariantIcon],svg[mdi-email-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13L2 6.76V6c0-1.11.89-2 2-2h16a2 2 0 0 1 2 2v.75zm10 5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.11l2 1.25V18h16v-7.64l2-1.25z"></svg:path>`,
})
export class MdiEmailVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
