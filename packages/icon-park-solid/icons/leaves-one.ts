import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLeavesOneIcon],svg[icon-park-solid-leaves-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSLeavesOne0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M37 23.879C37 30.573 31.18 36 24 36s-13-5.427-13-12.121S24 4 24 4s13 13.184 13 19.879Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 4v32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 36v8"></svg:path><svg:path stroke="#fff" d="M37 23.879C37 30.573 31.18 36 24 36s-13-5.427-13-12.12m26-.001C37 17.184 24 4 24 4S11 17.184 11 23.879"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSLeavesOne0)"></svg:path>`,
})
export class IconParkSolidLeavesOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
