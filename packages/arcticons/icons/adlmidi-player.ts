import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdlmidiPlayerIcon],svg[arcticons-adlmidi-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="30.882" cy="32.329" r="2.124" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.006 32.329v-9.442c3.014 0 4.494 1.522 4.494 4.721"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 10.5h33v27h-33zm2 0v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m-29 31v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m2.9 2v-2m-33-25h2m-2 2.875h2m-2 2.875h2m-2 2.875h2M5.5 24h2m-2 2.875h2m-2 2.875h2m-2 2.875h2m-2 2.875h2m33-23h2m-2 2.875h2m-2 2.875h2m-2 2.875h2M40.5 24h2m-2 2.875h2m-2 2.875h2m-2 2.875h2m-2 2.875h2"></svg:path>`,
})
export class ArcticonsAdlmidiPlayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
