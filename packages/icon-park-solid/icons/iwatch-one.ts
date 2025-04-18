import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidIwatchOneIcon],svg[icon-park-solid-iwatch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSIwatchOne0"><svg:g fill="none" stroke-width="4"><svg:rect width="22" height="24" x="13" y="12" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 12v6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 12h6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 30v6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 36h6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M35 23.934L29 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M35 21v6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m19 24l-6 .066"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M13 21v6m18-15V4H17v8m14 24v7a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-7M7 20v8m34-8v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSIwatchOne0)"></svg:path>`,
})
export class IconParkSolidIwatchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
