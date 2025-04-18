import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWorkouttimeIcon],svg[arcticons-workouttime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35 42.46A21.51 21.51 0 0 1 8.72 8.87M24 2.5a21.52 21.52 0 0 1 20.57 27.78M24 2.5v15.72m-1.77 4.01l-8.28-8.28"></svg:path><svg:circle cx="24" cy="24" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28 31c-2.75 5.73 7.77 12.2 8.52 12.2S47.79 36.74 45 31c-1.21-2.21-4.71-5.2-8.51 0c-2.44-3.85-6.49-3.74-8.49 0"></svg:path>`,
})
export class ArcticonsWorkouttimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
