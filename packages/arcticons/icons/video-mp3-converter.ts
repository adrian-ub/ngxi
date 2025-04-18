import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVideoMp3ConverterIcon],svg[arcticons-video-mp3-converter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.396 9.589c-8.374-6.71-20.602-5.362-27.312 3.012s-5.362 20.603 3.012 27.313c7.729 6.193 18.879 5.582 25.884-1.418"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="33.996" cy="29.488" r="4.512"></svg:circle><svg:path d="M38.508 29.488V14h4.008"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.676 3.841l1.72 5.748l-5.748 1.721"></svg:path>`,
})
export class ArcticonsVideoMp3ConverterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
