import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxHealthIcon],svg[bx-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.649 5.286L14 8.548V2.025h-4v6.523L4.351 5.286l-2 3.465l5.648 3.261l-5.648 3.261l2 3.465L10 15.477V22h4v-6.523l5.649 3.261l2-3.465l-5.648-3.261l5.648-3.261z"></svg:path>`,
})
export class BxHealthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
