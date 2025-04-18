import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilSelectIcon],svg[il-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 275h232L116 391zm232-92H0L116 67z"></svg:path>`,
})
export class IlSelectIcon {
  readonly viewBox = input("0 0 240 700")
  readonly width = input("0.35em")
  readonly height = input("1em")
}
