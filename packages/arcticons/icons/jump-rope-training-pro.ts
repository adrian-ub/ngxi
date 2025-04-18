import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJumpRopeTrainingProIcon],svg[arcticons-jump-rope-training-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.902 18.598v14.098m28.196-14.098v14.098"></svg:path><svg:circle cx="24" cy="18.598" r="14.098" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="18.598" r="9.078" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="18.598" r="4.058" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.532 32.696h4.74v8.435a2.37 2.37 0 0 1-2.37 2.369h0a2.37 2.37 0 0 1-2.37-2.37zm28.197 0h4.739v8.435a2.37 2.37 0 0 1-2.37 2.369h0a2.37 2.37 0 0 1-2.37-2.37z"></svg:path>`,
})
export class ArcticonsJumpRopeTrainingProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
