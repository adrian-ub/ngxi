import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCitraIcon],svg[arcticons-citra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="23.41" cy="20.93" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="19.97" ry="13.02" transform="rotate(-25.08 23.415 20.944)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.77 22.16l-15.46 7.2m36.2-16.85l-15.46 7.2m-4.75.63L8.12 16.61m30.58 8.65l-13.18-3.73m-2.84-2.18L17.95 9.11m10.92 23.64l-4.73-10.23m.23-3.69l5.64-12.4M16.82 35.44l5.68-12.5"></svg:path><svg:ellipse cx="23.41" cy="20.93" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.91" ry="1.75" transform="rotate(-25.05 23.408 20.93)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.51 12.51c4.81 10.41.6 22.62-9.4 27.27s-22 0-26.8-10.42"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.82 38.63c-2 0 0-3.19 0-3.19s2.09 3.19 0 3.19"></svg:path>`,
})
export class ArcticonsCitraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
