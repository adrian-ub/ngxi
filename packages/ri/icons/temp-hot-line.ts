import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTempHotLineIcon],svg[ri-temp-hot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298zm1.856.231V5h2v7.126A4.002 4.002 0 0 1 12 20a4 4 0 0 1-1-7.874M12 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiTempHotLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
