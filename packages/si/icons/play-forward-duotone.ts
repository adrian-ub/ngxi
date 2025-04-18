import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siPlayForwardDuotoneIcon],svg[si-play-forward-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".16" d="m4 5l10 7l-10 7z"></svg:path><svg:path fill="currentColor" d="m21 12l.43.614a.75.75 0 0 0 0-1.228zM11 5l.43-.614A.75.75 0 0 0 10.25 5zm0 14h-.75a.75.75 0 0 0 1.18.614zm.75-4.867a.75.75 0 0 0-1.5 0zM14 12l.43.614a.75.75 0 0 0 0-1.228zM4 5l.43-.614A.75.75 0 0 0 3.25 5zm0 14h-.75a.75.75 0 0 0 1.18.614zm17.43-7.614l-10-7l-.86 1.228l10 7zm-10 8.228l10-7l-.86-1.228l-10 7zM10.25 5v4.688h1.5V5zm0 9.133V19h1.5v-4.867zm4.18-2.747l-10-7l-.86 1.228l10 7zM3.25 5v14h1.5V5zm1.18 14.614l10-7l-.86-1.228l-10 7z"></svg:path>`,
})
export class SiPlayForwardDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
