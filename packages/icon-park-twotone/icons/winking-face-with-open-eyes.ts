import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneWinkingFaceWithOpenEyesIcon],svg[icon-park-twotone-winking-face-with-open-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTWinkingFaceWithOpenEyes0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke-linecap="round" d="m33 16l-4 4l4 4m-2 7s-2 4-7 4s-7-4-7-4"></svg:path><svg:circle cx="17" cy="20" r="4" fill="#555" stroke-linecap="round"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWinkingFaceWithOpenEyes0)"></svg:path>`,
})
export class IconParkTwotoneWinkingFaceWithOpenEyesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
