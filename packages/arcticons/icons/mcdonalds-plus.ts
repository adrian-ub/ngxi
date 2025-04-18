import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMcdonaldsPlusIcon],svg[arcticons-mcdonalds-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.5 35.7c0-5.78-1.51-23.4-6.31-23.4S24 25.59 24 33.88c0-8.29-1.4-21.58-6.19-21.58S11.5 29.92 11.5 35.7m25.79-20.9v-5m-2.5 2.5h5"></svg:path>`,
})
export class ArcticonsMcdonaldsPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
