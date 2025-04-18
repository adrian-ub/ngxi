import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsHaskellDarkIcon],svg[skill-icons-haskell-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#666" d="m28 198.176l47.06-70.588L28 57h35.294l47.06 70.588l-47.06 70.588z"></svg:path><svg:path fill="#999" d="m75.06 198.176l47.059-70.588L75.059 57h35.295l94.117 141.176h-35.295l-29.41-44.117l-29.413 44.117z"></svg:path><svg:path fill="#666" d="m188.785 157l-15.686-23.532l54.901-.002v23.531h-39.216zm-23.529-35.294l-15.687-23.532L228 98.172v23.53h-62.749z"></svg:path></svg:g>`,
})
export class SkillIconsHaskellDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
