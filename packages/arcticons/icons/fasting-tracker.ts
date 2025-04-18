import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFastingTrackerIcon],svg[arcticons-fasting-tracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.819 41.371l-.662-10.3c0-.653.248-.962.633-1.347l2.917-2.482c.946-.804.814-1.597.793-1.943L29 17c-.033-.551-.447-1-1-1s-1 .448-1 1v7a1 1 0 1 1-2 0v-7a1 1 0 1 0-2 0v7a1 1 0 1 1-2 0v-7c0-.552-.447-1-1-1s-.966.449-1 1l-.5 8.3c-.021.357-.116 1.165.793 1.943l2.901 2.482c.317.316.55.868.55 1.347l-.576 10.298"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="17.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.625 36.375a2 2 0 0 0-2.828 2.828M24 2.5a2 2 0 1 0 0 4"></svg:path>`,
})
export class ArcticonsFastingTrackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
