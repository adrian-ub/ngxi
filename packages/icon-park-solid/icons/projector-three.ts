import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidProjectorThreeIcon],svg[icon-park-solid-projector-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSProjectorThree0"><svg:g fill="none"><svg:path fill="#fff" d="M6 38v-6h36v6h-6v-6H12v6z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 38v-6h-6v6zM6 38v-6h6v6zm18-22H4v16h40V16h-6m-28 8h8"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 23a7 7 0 1 0 0-14a7 7 0 0 0 0 14"></svg:path><svg:path fill="#000" d="M31 19a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSProjectorThree0)"></svg:path>`,
})
export class IconParkSolidProjectorThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
