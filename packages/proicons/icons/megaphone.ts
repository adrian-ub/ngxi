import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMegaphoneIcon],svg[proicons-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m7.142 15.9l-2.5-.627a2.5 2.5 0 0 1-1.892-2.425V10.78a2.5 2.5 0 0 1 1.891-2.424l13.5-3.39a2.5 2.5 0 0 1 3.109 2.425v8.847a2.5 2.5 0 0 1-3.109 2.425l-5.19-1.304m-5.81-1.458a3 3 0 1 0 5.809 1.459M7.143 15.9l5.809 1.46"></svg:path>`,
})
export class ProiconsMegaphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
