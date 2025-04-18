import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTower2FilledIcon],svg[tdesign-tower-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .586l2.973 2.973L15.936 18H17v5H7v-5h1.064l.963-14.44zM10.069 18h3.862l-.904-13.558L12 3.414l-1.027 1.028z"></svg:path>`,
})
export class TdesignTower2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
