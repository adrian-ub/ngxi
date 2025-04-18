import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiFranceinfoIcon],svg[cbi-franceinfo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.687 6.948A2.68 2.68 0 0 1 12 9.619a2.68 2.68 0 0 1-2.686-2.671A2.68 2.68 0 0 1 12 4.276a2.68 2.68 0 0 1 2.687 2.672m0 10.104A2.68 2.68 0 0 1 12 19.724a2.68 2.68 0 0 1-2.686-2.672A2.68 2.68 0 0 1 12 14.381a2.68 2.68 0 0 1 2.687 2.671"></svg:path>`,
})
export class CbiFranceinfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
