import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneVideocameraIcon],svg[icon-park-twotone-videocamera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTVideocamera0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="32" height="26" x="4" y="11" rx="2"></svg:rect><svg:circle cx="20" cy="24" r="6" fill="#555" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m36 29l8 4V15l-8 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTVideocamera0)"></svg:path>`,
})
export class IconParkTwotoneVideocameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
