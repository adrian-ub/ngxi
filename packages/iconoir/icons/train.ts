import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTrainIcon],svg[iconoir-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M9.609 7h4.782A2.61 2.61 0 0 1 17 9.609a.39.39 0 0 1-.391.391H7.39A.39.39 0 0 1 7 9.609A2.61 2.61 0 0 1 9.609 7"></svg:path><svg:path stroke-linejoin="round" d="M9 3h6a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6m7 12.01l.01-.011M8 15.01l.01-.011"></svg:path><svg:path d="m10.5 19l-2 2.5m5-2.5l2 2.5m1-2.5l2 2.5M7.5 19l-2 2.5"></svg:path></svg:g>`,
})
export class IconoirTrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
