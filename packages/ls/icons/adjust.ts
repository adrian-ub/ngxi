import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsAdjustIcon],svg[ls-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M358 0c198 0 359 161 359 359S556 717 358 717S0 557 0 359S160 0 358 0m0 63v592c164 0 296-132 296-296S522 63 358 63"></svg:path>`,
})
export class LsAdjustIcon {
  readonly viewBox = input("0 0 717 717")
  readonly width = input("1em")
  readonly height = input("1em")
}
