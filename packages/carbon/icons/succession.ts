import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSuccessionIcon],svg[carbon-succession-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 28v2h-4v-2zm6 0v2h-4v-2zm-15 0v-3h-2v3a2 2 0 0 0 2 2h3v-2zm-2-9h2v4h-2zm0-6h2v4h-2z"></svg:path><svg:path fill="currentColor" d="M22 12L12 2L2 12l1.414 1.414L11 5.828V11h2V5.828l7.586 7.586z"></svg:path>`,
})
export class CarbonSuccessionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
