import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxAltLightIcon],svg[lets-icons-box-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M9 12a3 3 0 0 0 6 0"></svg:path><svg:path d="M4.5 8.711c0-.601 0-.902.086-1.185s.252-.534.586-1.034l.14-.21c.582-.873.872-1.309 1.315-1.545c.442-.237.966-.237 2.014-.237h6.718c1.048 0 1.572 0 2.014.237c.442.236.733.672 1.314 1.544l.141.211c.334.5.5.75.586 1.034c.086.283.086.584.086 1.185V15.5c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586h-7c-1.886 0-2.828 0-3.414-.586S4.5 17.386 4.5 15.5z"></svg:path><svg:path stroke-linecap="round" d="M4.5 9.5h15"></svg:path></svg:g>`,
})
export class LetsIconsBoxAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
