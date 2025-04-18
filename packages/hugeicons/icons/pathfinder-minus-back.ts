import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPathfinderMinusBackIcon],svg[hugeicons-pathfinder-minus-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 9h.5c2.817 0 4.225 0 5.182.764q.308.245.554.554C22 11.275 22 12.684 22 15.5s0 4.225-.764 5.182a3.5 3.5 0 0 1-.554.554C19.725 22 18.317 22 15.5 22c-2.816 0-4.225 0-5.182-.764a3.5 3.5 0 0 1-.554-.554C9 19.725 9 18.317 9 15.5V15"></svg:path><svg:path d="M15 9c-.003 2.487-.046 3.783-.763 4.682a3.5 3.5 0 0 1-.555.555c-.899.717-2.195.76-4.682.763M2 9.5v-2M7.5 2h2M2 12c.065.88.222 1.475.595 1.942q.207.259.467.465c.466.371 1.06.527 1.938.593h.5M2 5c.066-.878.222-1.472.593-1.938a3 3 0 0 1 .465-.467C3.525 2.222 4.12 2.065 5 2m7 0c.878.066 1.472.222 1.938.593q.26.206.467.465c.373.467.53 1.062.595 1.942v.5"></svg:path></svg:g>`,
})
export class HugeiconsPathfinderMinusBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
