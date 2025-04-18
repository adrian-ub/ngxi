import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpn2MidiPlayerIcon],svg[arcticons-opn2-midi-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 13h35v22h-35zm2 0v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m-31 26v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m3.1 2v-2m-35-20h2m-2 3h2m-2 3h2m-2 3h2m-2 3h2m-2 3h2m-2 3h2m35-18h2m-2 3h2m-2 3h2m-2 3h2m-2 3h2m-2 3h2m-2 3h2"></svg:path><svg:circle cx="31.882" cy="29.876" r="2.124" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.006 29.876v-9.441c3.014 0 4.494 1.52 4.494 4.72"></svg:path>`,
})
export class ArcticonsOpn2MidiPlayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
