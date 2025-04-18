import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSmilingFaceWithTearIcon],svg[openmoji-smiling-face-with-tear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="23" fill="#fcea2b"></svg:circle><svg:path fill="#92d3f5" d="M44.542 46.217a3.64 3.64 0 0 1-1.106-2.576c-.04-3.221 2.966-6.34 3.093-6.472a.69.69 0 0 1 .975-.012c.131.128 3.214 3.171 3.256 6.392a3.663 3.663 0 0 1-6.219 2.668Z"></svg:path><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M44.152 45.768a20.04 20.04 0 0 1-17.967-.839"></svg:path><svg:path d="M30 31a3 3 0 1 1-3-3a3 3 0 0 1 3 3m18 0a3 3 0 1 1-3-3a3 3 0 0 1 3 3"></svg:path><svg:path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M44.542 46.217a3.64 3.64 0 0 1-1.106-2.576c-.04-3.221 2.966-6.34 3.093-6.472a.69.69 0 0 1 .975-.012c.131.128 3.214 3.171 3.256 6.392a3.663 3.663 0 0 1-6.219 2.668Z"></svg:path>`,
})
export class OpenmojiSmilingFaceWithTearIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
