import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGlassesIcon],svg[icon-park-twotone-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGlasses0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="12" cy="35" r="7" fill="#555"></svg:circle><svg:circle cx="36" cy="35" r="7" fill="#555"></svg:circle><svg:path d="M5 34V10.883c0-1.391 0-2.087.378-2.61c.377-.525 1.037-.745 2.357-1.185L11 6m32 28V10.883c0-1.391 0-2.087-.377-2.61c-.378-.525-1.038-.745-2.358-1.185L37 6m-8 28a5 5 0 0 0-10 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGlasses0)"></svg:path>`,
})
export class IconParkTwotoneGlassesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
