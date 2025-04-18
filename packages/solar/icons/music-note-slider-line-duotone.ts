import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSliderLineDuotoneIcon],svg[solar-music-note-slider-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0V8a2 2 0 0 0 2 2" opacity=".5"></svg:path><svg:path d="M5 19.5c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMusicNoteSliderLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
