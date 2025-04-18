import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusPictureIcon],svg[nimbus-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 6.73L11 5L7.68 7.53L6 6L2.5 8.49V11h11zm-1.25 3h-8.5v-.59L5.9 7.6l.94.86l.77.7l.83-.63l2.59-2l1.22.84z"></svg:path><svg:ellipse cx="3.3" cy="5.75" fill="currentColor" rx=".8" ry=".75"></svg:ellipse><svg:path fill="currentColor" d="M14.75 2.5H1.25A1.25 1.25 0 0 0 0 3.75v8.5a1.25 1.25 0 0 0 1.25 1.25h13.5A1.25 1.25 0 0 0 16 12.25v-8.5a1.25 1.25 0 0 0-1.25-1.25m0 9.75H1.25v-8.5h13.5z"></svg:path>`,
})
export class NimbusPictureIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
