import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiEyePainIcon],svg[openmoji-eye-pain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="35.98" cy="39.971" fill="#fff" rx="19.297" ry="11.01"></svg:ellipse><svg:circle cx="36.144" cy="39.651" r="8.896" fill="#a57939"></svg:circle><svg:ellipse cx="36" cy="39.921" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="20" ry="11.737"></svg:ellipse><svg:circle cx="36.144" cy="39.651" r="4.85"></svg:circle><svg:circle cx="36.144" cy="39.651" r="4.85" fill="none"></svg:circle><svg:circle cx="36.144" cy="39.651" r="8.896" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m43.135 24.35l1.983-4.037l2.026 2.152l2.491-5.072m-25.319-1.134l2.333 3.845l-2.904.549l2.93 4.83m9.805-2.801l-.19-4.494l-2.721 1.154l-.238-5.646"></svg:path><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m43.135 24.35l1.983-4.037l2.026 2.152l2.491-5.072m-25.319-1.134l2.333 3.845l-2.904.549l2.93 4.83m9.805-2.801l-.19-4.494l-2.721 1.154l-.238-5.646"></svg:path>`,
})
export class OpenmojiEyePainIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
