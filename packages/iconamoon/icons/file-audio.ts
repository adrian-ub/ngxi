import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonFileAudioIcon],svg[iconamoon-file-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 21a2 2 0 0 1-2-2V3h9l5 5v11a2 2 0 0 1-2 2z"></svg:path><svg:path stroke-linejoin="round" d="M13 3v6h6"></svg:path><svg:circle cx="11" cy="17" r="1"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 12v5m2-3l-2-2"></svg:path></svg:g>`,
})
export class IconamoonFileAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
