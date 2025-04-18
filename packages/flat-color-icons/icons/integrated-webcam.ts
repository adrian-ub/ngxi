import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsIntegratedWebcamIcon],svg[flat-color-icons-integrated-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#607D8B" d="M38 42H10c-2.2 0-4-1.8-4-4V10c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4"></svg:path><svg:circle cx="24" cy="24" r="12" fill="#455A64"></svg:circle><svg:circle cx="24" cy="24" r="9" fill="#42A5F5"></svg:circle><svg:path fill="#90CAF9" d="M28.8 21c-1.2-1.4-3-2.2-4.8-2.2s-3.6.8-4.8 2.2c-.5.5-.4 1.3.1 1.8s1.3.4 1.8-.1c1.5-1.7 4.3-1.7 5.8 0c.3.3.6.4 1 .4q.45 0 .9-.3c.4-.4.5-1.3 0-1.8"></svg:path>`,
})
export class FlatColorIconsIntegratedWebcamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
