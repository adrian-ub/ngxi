import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRegisteredTrademarkIcon],svg[mdi-registered-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m.25-6.73h-1.44v3.23H9V7.71h3.26q1.545 0 2.4.69c.56.47.84 1.1.84 1.96q0 .9-.39 1.5c-.26.4-.65.72-1.18.95l1.9 3.59v.1h-1.94zm-1.44-1.46h1.46c.45 0 .8-.12 1.05-.35s.37-.55.37-.96s-.11-.73-.35-.97c-.23-.24-.59-.35-1.08-.35h-1.45z"></svg:path>`,
})
export class MdiRegisteredTrademarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
