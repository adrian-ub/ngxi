import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFunHabitIcon],svg[arcticons-fun-habit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.268 9.734a8.54 8.54 0 0 1 3.043 6.556v17.645a8.546 8.546 0 0 1-8.566 8.565h-19.49a8.546 8.546 0 0 1-8.566-8.565V16.29a8.546 8.546 0 0 1 8.566-8.564H30.7M13.209 20.209h11.174M13.209 31.308h20.14"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M25.982 7.725V7.64c0-1.186.955-2.14 2.142-2.14h.832"></svg:path><svg:path d="M28.559 5.5h8.564c1.186 0 2.142.955 2.142 2.141v16.437l-4.29-2.437l-4.276 2.437V7.64a2.137 2.137 0 0 0-2.141-2.14"></svg:path></svg:g>`,
})
export class ArcticonsFunHabitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
