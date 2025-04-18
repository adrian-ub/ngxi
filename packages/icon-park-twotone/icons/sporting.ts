import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSportingIcon],svg[icon-park-twotone-sporting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSporting0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="8" r="4" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 18h12v16m22-16H29v26"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSporting0)"></svg:path>`,
})
export class IconParkTwotoneSportingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
