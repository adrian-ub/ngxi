import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHandEyeIcon],svg[ph-hand-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 88a27.75 27.75 0 0 0-12 2.71V60a28 28 0 0 0-41.36-24.6A28 28 0 0 0 80 44v6.71A27.75 27.75 0 0 0 68 48a28 28 0 0 0-28 28v76a88 88 0 0 0 176 0v-36a28 28 0 0 0-28-28m12 64a72 72 0 0 1-144 0V76a12 12 0 0 1 24 0v36a8 8 0 0 0 16 0V44a12 12 0 0 1 24 0v60a8 8 0 0 0 16 0V60a12 12 0 0 1 24 0v60a8 8 0 0 0 16 0v-4a12 12 0 0 1 24 0Zm-60 16a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12-40c-36.52 0-54.41 34.94-55.16 36.42a8 8 0 0 0 0 7.16C73.59 173.06 91.48 208 128 208s54.41-34.94 55.16-36.42a8 8 0 0 0 0-7.16C182.41 162.94 164.52 128 128 128m0 64c-20.63 0-33.8-16.52-38.7-24c4.9-7.48 18.07-24 38.7-24s33.81 16.53 38.7 24c-4.9 7.48-18.07 24-38.7 24"></svg:path>`,
})
export class PhHandEyeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
