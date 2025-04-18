import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsBracketrightIcon],svg[ls-bracketright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 73V0h168v954H0v-72h96V73z"></svg:path>`,
})
export class LsBracketrightIcon {
  readonly viewBox = input("0 0 168 954")
  readonly width = input("0.18em")
  readonly height = input("1em")
}
