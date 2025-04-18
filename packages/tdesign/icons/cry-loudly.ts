import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCryLoudlyIcon],svg[tdesign-cry-loudly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h4v2H9v4H7v-4H6zm8 0h4v2h-1v4h-2v-4h-1zm-1 4v3h-2v-3z"></svg:path>`,
})
export class TdesignCryLoudlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
