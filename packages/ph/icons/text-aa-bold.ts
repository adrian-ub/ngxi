import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextAaBoldIcon],svg[ph-text-aa-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90.86 50.89a12 12 0 0 0-21.72 0l-64 136a12 12 0 0 0 21.71 10.22L42.44 164h75.12l15.58 33.11a12 12 0 0 0 21.72-10.22ZM53.74 140L80 84.18L106.27 140ZM200 84c-13.85 0-24.77 3.86-32.45 11.48a12 12 0 1 0 16.9 17c3-3 8.26-4.52 15.55-4.52c11 0 20 7.18 20 16v4.39a47.3 47.3 0 0 0-20-4.35c-24.26 0-44 17.94-44 40s19.74 40 44 40a47.2 47.2 0 0 0 22-5.38a12 12 0 0 0 22-6.62v-68c0-22.06-19.74-40-44-40m0 96c-11 0-20-7.18-20-16s9-16 20-16s20 7.18 20 16s-9 16-20 16"></svg:path>`,
})
export class PhTextAaBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
