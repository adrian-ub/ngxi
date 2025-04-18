import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSmilingFaceWithSquintingEyesIcon],svg[icon-park-solid-smiling-face-with-squinting-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSmilingFaceWithSquintingEyes0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 31s-2 4-7 4s-7-4-7-4m4-10s-1-4-4-4s-4 4-4 4m22 0s-1-4-4-4s-4 4-4 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSmilingFaceWithSquintingEyes0)"></svg:path>`,
})
export class IconParkSolidSmilingFaceWithSquintingEyesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
