import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsCompassIcon],svg[ls-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M358 0c198 0 359 161 359 359S556 717 358 717S0 557 0 359S160 0 358 0m0 634c152 0 276-123 276-275S510 83 358 83S83 207 83 359s123 275 275 275m59-217l-214 97l97-214l214-97zm-175 59l155-78l-78-78z"></svg:path>`,
})
export class LsCompassIcon {
  readonly viewBox = input("0 0 717 717")
  readonly width = input("1em")
  readonly height = input("1em")
}
