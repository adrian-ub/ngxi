import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMobileIcon],svg[lets-icons-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M6.879 2.879c-.51.51-.709 1.138-.797 1.793C6 5.284 6 6.048 6 6.934v10.132c0 .886 0 1.65.082 2.262c.088.655.287 1.284.797 1.793c.51.51 1.138.709 1.793.797c.612.082 1.376.082 2.262.082h2.132c.886 0 1.65 0 2.262-.082c.655-.088 1.284-.287 1.793-.797c.51-.51.709-1.138.797-1.793c.082-.612.082-1.376.082-2.262V6.934c0-.886 0-1.65-.082-2.262c-.088-.655-.287-1.284-.797-1.793c-.51-.51-1.138-.709-1.793-.797C14.716 2 13.952 2 13.066 2h-2.132c-.886 0-1.65 0-2.262.082c-.655.088-1.284.287-1.793.797ZM7 16h10"></svg:path>`,
})
export class LetsIconsMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
