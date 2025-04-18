import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSongkickIcon],svg[arcticons-songkick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.657 24.047c4.983 1.308 9.23 3.159 9.23 7.028c0 3.505-2.901 6.056-7.527 6.056c-10.388 0-8.201-11.397-16.696-11.397c-3.491 0-5.762 2.425-5.762 2.425m20.755-4.112c-4.984-1.309-6.554-2.757-6.554-6.626c0-3.506 2.27-5.72 6.897-5.72c7.122 0 8.888 7.016 14.65 7.016c3.49 0 5.346-2.633 5.346-2.633"></svg:path>`,
})
export class ArcticonsSongkickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
