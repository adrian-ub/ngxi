import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxLightIcon],svg[lets-icons-box-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M4.5 8.711c0-.601 0-.902.086-1.185s.252-.534.586-1.034l.14-.21c.582-.873.872-1.309 1.315-1.545c.442-.237.966-.237 2.014-.237h6.718c1.048 0 1.572 0 2.014.237c.442.236.733.672 1.314 1.544l.141.211c.334.5.5.75.586 1.034c.086.283.086.584.086 1.185V15.5c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586h-7c-1.886 0-2.828 0-3.414-.586S4.5 17.386 4.5 15.5z"></svg:path><svg:path stroke-linecap="round" d="M4.5 9.5h15"></svg:path><svg:path d="M9.5 9.65a.15.15 0 0 1 .15-.15h4.7a.15.15 0 0 1 .15.15v4.055a.45.45 0 0 1-.681.386l-1.69-1.014a.25.25 0 0 0-.258 0l-1.69 1.014a.45.45 0 0 1-.681-.386z"></svg:path></svg:g>`,
})
export class LetsIconsBoxLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
