import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMirrorOneIcon],svg[icon-park-twotone-mirror-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMirrorOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="20" r="16" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 36v8m-10 0h20"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMirrorOne0)"></svg:path>`,
})
export class IconParkTwotoneMirrorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
