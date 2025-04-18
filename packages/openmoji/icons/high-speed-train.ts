import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHighSpeedTrainIcon],svg[openmoji-high-speed-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `d<svg:path fill="#fff" d="m68 48l-61.78-.503l-1.131-3.958l31.76-21.02l31.15-.578z"></svg:path><svg:path fill="#9b9b9a" d="M68 48v5.5H12.65a1.004 1.004 0 0 1-.503-1.873L18.41 48z"></svg:path><svg:path fill="#3f3f3f" d="M68 36.5H41.84a1.286 1.286 0 0 1-.69-2.37l7.259-4.62a12.86 12.86 0 0 1 6.903-2.01h12.68m-52.382 9h9.502a12.86 12.86 0 0 0 6.903-2.01l7.259-4.62a1.286 1.286 0 0 0-.69-2.37H29.11"></svg:path><svg:path fill="#d22f27" d="M67.93 44H18.64a.571.571 0 0 1-.307-1.054l3.227-2.053A5.7 5.7 0 0 1 24.628 40h43.3"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M67 36.5H41.84a1.286 1.286 0 0 1-.69-2.37l7.259-4.62a12.86 12.86 0 0 1 6.903-2.01h11.68m-51.382 9h9.502a12.86 12.86 0 0 0 6.903-2.01l7.259-4.62a1.286 1.286 0 0 0-.69-2.37H29.11"></svg:path><svg:path d="M67 48H8.27a3 3 0 0 1-1.664-5.496l24.95-16.63a23.4 23.4 0 0 1 12.97-3.926h22.48M67 53.5H12.65a1.004 1.004 0 0 1-.503-1.873L18.41 48"></svg:path><svg:path d="M66.93 44H18.64a.571.571 0 0 1-.307-1.054l3.227-2.053A5.7 5.7 0 0 1 24.628 40h42.3"></svg:path></svg:g>`,
})
export class OpenmojiHighSpeedTrainIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
