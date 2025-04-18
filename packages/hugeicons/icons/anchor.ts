import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAnchorIcon],svg[hugeicons-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.828 11.356a.73.73 0 0 0-.73-.03l-2 1c-.37.19-.52.64-.34 1.01c.19.37.64.52 1.01.34l.82-.41a8.254 8.254 0 0 1-7.4 6.95V8.656c1.43-.34 2.5-1.62 2.5-3.15c0-1.79-1.46-3.25-3.25-3.25s-3.25 1.46-3.25 3.25c0 1.53 1.07 2.81 2.5 3.15v11.56a8.254 8.254 0 0 1-7.4-6.95l.82.41c.37.19.82.04 1.01-.34c.19-.37.04-.82-.34-1.01l-2-1a.76.76 0 0 0-.73.03c-.22.14-.36.38-.36.64c0 5.38 4.37 9.75 9.75 9.75s9.75-4.37 9.75-9.75c0-.26-.13-.5-.36-.64m-11.14-5.86c0-.96.79-1.75 1.75-1.75s1.75.79 1.75 1.75s-.79 1.75-1.75 1.75s-1.75-.79-1.75-1.75" color="currentColor"></svg:path>`,
})
export class HugeiconsAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
