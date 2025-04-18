import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAudioInputXlrIcon],svg[mdi-audio-input-xlr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m1.5 14.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5M9 12c0-.83-.67-1.5-1.5-1.5S6 11.17 6 12s.67 1.5 1.5 1.5S9 12.83 9 12m9 0c0-.83-.67-1.5-1.5-1.5S15 11.17 15 12s.67 1.5 1.5 1.5S18 12.83 18 12"></svg:path>`,
})
export class MdiAudioInputXlrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
