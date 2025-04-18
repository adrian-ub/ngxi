import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPathfinderCropIcon],svg[hugeicons-pathfinder-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.76 10.316a3.5 3.5 0 0 1 .556-.555c.77-.615 1.832-.735 3.683-.759c.473-.006.71-.009.859.14s.146.386.14.859c-.024 1.85-.144 2.913-.759 3.683q-.246.308-.555.555c-.77.614-1.832.735-3.683.759c-.473.006-.71.009-.859-.14s-.146-.386-.14-.859c.024-1.85.144-2.913.759-3.683"></svg:path><svg:path d="M9 17.495c.041 1.549.192 2.487.75 3.186q.245.308.554.554c.959.765 2.369.765 5.188.765c2.82 0 4.23 0 5.189-.765q.308-.246.554-.554c.765-.959.765-2.369.765-5.189s0-4.23-.765-5.188a3.5 3.5 0 0 0-.554-.555c-.699-.557-1.637-.708-3.186-.749M2 12c.065.88.222 1.475.595 1.942q.207.259.467.465c.466.371 1.06.527 1.938.593h.5M2 5c.066-.878.222-1.472.593-1.938a3 3 0 0 1 .465-.467C3.525 2.222 4.12 2.065 5 2m7 0c.878.066 1.472.222 1.938.593q.26.206.467.465c.373.467.53 1.062.595 1.942v.5m-13 2v2M9.5 2h-2"></svg:path></svg:g>`,
})
export class HugeiconsPathfinderCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
