import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsMelpaIcon],svg[file-icons-melpa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M93.85 87.624L452.561 55.27V10.735L54.224 46.682v309.626l39.625 5.1zm0 293.866l-59.96-7.655V137.511L0 140.61v309.63l395.21 51.026v-29.65L93.85 432.978zm19.812-275.665v309.626L512 466.477V69.876zm211.563 177.653l38.043-125.66c.709-3.315 2.956-5.208 6.75-5.208h53.627c4.974 0 8.583 3.823 8.583 8.797v213.54c0 4.976-3.609 8.116-8.583 8.116H394.51c-4.974 0-7.641-3.14-7.641-8.116v-171.84l-37.484 122.255c-1.42 4.74-4.385 6.605-8.88 6.605h-29.849c-4.5 0-7.46-1.686-8.88-6.427l-37.433-120.227v169.634c-.213 6.9-3.331 7.93-8.403 8.116h-29.135c-4.974 0-7.822-3.14-7.822-8.116v-213.54c0-4.974 2.849-8.797 7.822-8.797h53.985c3.312 0 5.563 1.893 6.75 5.207z"></svg:path>`,
})
export class FileIconsMelpaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
