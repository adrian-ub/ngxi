import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsAudioFileIcon],svg[flat-color-icons-audio-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M204 0h48v48h-48z"></svg:path><svg:path fill="#90CAF9" d="M244 45h-32V3h22l10 10z"></svg:path><svg:path fill="#E1F5FE" d="M242.5 14H233V4.5z"></svg:path><svg:g fill="#1976D2"><svg:circle cx="227" cy="30" r="4"></svg:circle><svg:path d="m234 21l-5-2v11h2v-7.1l3 1.1z"></svg:path></svg:g><svg:path fill="#90CAF9" d="M40 45H8V3h22l10 10z"></svg:path><svg:path fill="#E1F5FE" d="M38.5 14H29V4.5z"></svg:path><svg:g fill="#1976D2"><svg:circle cx="23" cy="30" r="4"></svg:circle><svg:path d="m30 21l-5-2v11h2v-7.1l3 1.1z"></svg:path></svg:g>`,
})
export class FlatColorIconsAudioFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
