import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHandFistBoldIcon],svg[ph-hand-fist-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 76h-12V64a36 36 0 0 0-60-26.8a36 36 0 0 0-58.73 17.34A36 36 0 0 0 20 88v40a108 108 0 0 0 216 0v-16a36 36 0 0 0-36-36m-60-12a12 12 0 0 1 24 0v12h-24Zm-48 0a12 12 0 0 1 24 0v40a12 12 0 0 1-24 0ZM44 88a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0Zm168 40a84 84 0 0 1-167.39 10.15A35.93 35.93 0 0 0 80 130.8a35.89 35.89 0 0 0 43.65 3.34a36.2 36.2 0 0 0 6.35 6.36a51.82 51.82 0 0 0-14 35.5a12 12 0 0 0 24 0a28 28 0 0 1 28-28a12 12 0 0 0 0-24h-16a12 12 0 0 1-12-12v-12h60a12 12 0 0 1 12 12Z"></svg:path>`,
})
export class PhHandFistBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
