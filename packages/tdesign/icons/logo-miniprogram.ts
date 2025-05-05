import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoMiniprogramIcon],svg[tdesign-logo-miniprogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-9a9 9 0 1 0 0 18a9 9 0 0 0 0-18m2.5 5A1.5 1.5 0 0 0 13 9.5v5a3.5 3.5 0 1 1-4.199-3.43l.98-.199l.398 1.96l-.98.199A1.5 1.5 0 1 0 11 14.5v-5a3.5 3.5 0 1 1 4.199 3.43l-.98.199l-.398-1.96l.98-.199A1.5 1.5 0 0 0 14.5 8"></svg:path>`,
})
export class TdesignLogoMiniprogramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
