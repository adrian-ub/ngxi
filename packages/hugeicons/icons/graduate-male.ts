import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGraduateMaleIcon],svg[hugeicons-graduate-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 10c-2.005-.632-4.412-1-7-1s-4.995.368-7 1v3.5c2.005-.632 4.412-1 7-1s4.995.368 7 1z"></svg:path><svg:path d="M19 13v2.023c0 2.131-1.032 4.106-2.719 5.202l-1.4.91a5.23 5.23 0 0 1-5.762 0l-1.4-.91C6.032 19.13 5 17.155 5 15.023V13m14-3l1.126-.593C21.389 8.58 22.02 8.165 22 7.573c-.021-.592-.68-.952-1.997-1.672l-4.728-2.583C13.668 2.439 12.865 2 12 2s-1.668.44-3.275 1.318L3.998 5.9C2.68 6.621 2.02 6.981 2 7.573s.61 1.006 1.873 1.834L5 10"></svg:path></svg:g>`,
})
export class HugeiconsGraduateMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
