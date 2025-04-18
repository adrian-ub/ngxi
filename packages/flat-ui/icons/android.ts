import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiAndroidIcon],svg[flat-ui-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1C3C50" d="M10 0h34c6.014 0 10 4.035 10 10v80c0 5.926-4.004 10-10 10H10c-5.974 0-10-3.996-10-10V10C0 4.104 3.95 0 10 0"></svg:path><svg:path fill="#23475F" d="M4 10h46v79H4zm18.5 82h9a2.499 2.499 0 1 1 0 5h-9a2.5 2.5 0 1 1 0-5"></svg:path>`,
})
export class FlatUiAndroidIcon {
  readonly viewBox = input("0 0 54 100")
  readonly width = input("0.54em")
  readonly height = input("1em")
}
