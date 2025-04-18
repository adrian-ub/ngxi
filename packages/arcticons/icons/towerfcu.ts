import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTowerfcuIcon],svg[arcticons-towerfcu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.46 4.5h29.08M9.46 10.398h11.526m0 6.019V4.5m6.018 5.898v31.758M9.46 16.417v13c-.01 7.041 4.584 9.66 10.151 12.137l4.374 1.946l4.384-1.946c5.567-2.468 10.17-5.086 10.17-12.147v-12.9l-5.767-.02v22.84"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.46 16.417h11.526v25.739m-5.768-25.739v22.92m11.786-28.939H38.54"></svg:path>`,
})
export class ArcticonsTowerfcuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
