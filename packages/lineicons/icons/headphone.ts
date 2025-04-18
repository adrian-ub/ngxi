import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsHeadphoneIcon],svg[lineicons-headphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.6 18c-5.9-5.8-13.7-8.9-22.1-8.7c-16.4.2-29.7 13.5-29.7 29.6v11.5c0 2.3 1.9 4.3 4.3 4.3h6.2c2.3 0 4.3-1.9 4.3-4.3v-8.8c0-2.3-1.9-4.3-4.3-4.3h-6c.8-13 11.8-23.5 25.2-23.7c7.1-.2 13.9 2.5 18.9 7.4c4.5 4.4 7.1 10.1 7.3 16.2h-5.9c-2.3 0-4.3 1.9-4.3 4.3v8.8c0 2.3 1.9 4.3 4.3 4.3H58c2.3 0 4.3-1.9 4.3-4.3v-12c0-7.5-3.1-14.8-8.7-20.3M11.9 50.2H6.3v-8.3H12v8.3zm45.9 0h-5.7v-8.3h5.7z"></svg:path>`,
})
export class LineiconsHeadphoneIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
