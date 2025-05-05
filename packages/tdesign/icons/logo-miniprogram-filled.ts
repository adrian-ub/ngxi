import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoMiniprogramFilledIcon],svg[tdesign-logo-miniprogram-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m1 8.5v5a3.5 3.5 0 1 1-4.199-3.43l.98-.199l.398 1.96l-.98.199A1.5 1.5 0 1 0 11 14.5v-5a3.5 3.5 0 1 1 4.199 3.43l-.98.199l-.398-1.96l.98-.199A1.5 1.5 0 1 0 13 9.5"></svg:path>`,
})
export class TdesignLogoMiniprogramFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
