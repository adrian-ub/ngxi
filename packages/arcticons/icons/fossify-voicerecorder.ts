import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFossifyVoicerecorderIcon],svg[arcticons-fossify-voicerecorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5v37m-8.224-28.71v20.42m16.448-20.42v20.42M7.552 21.901v4.02m32.896-4.02v4.02"></svg:path>`,
})
export class ArcticonsFossifyVoicerecorderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
