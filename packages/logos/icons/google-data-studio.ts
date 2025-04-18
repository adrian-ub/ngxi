import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosGoogleDataStudioIcon],svg[logos-google-data-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#669DF6" d="M224.022 173.159h-92.959c-22.48 0-35.07 15.736-35.07 32.485c0 15.455 10.679 32.484 35.07 32.484h92.959z"></svg:path><svg:ellipse cx="224.022" cy="205.587" fill="#1A73E8" rx="31.979" ry="32.485"></svg:ellipse><svg:path fill="#669DF6" d="M128.028 86.551H35.07C12.59 86.551 0 102.288 0 119.036c0 15.456 10.678 32.485 35.07 32.485h92.958z"></svg:path><svg:ellipse cx="128.028" cy="119.036" fill="#1A73E8" rx="31.979" ry="32.485"></svg:ellipse><svg:path fill="#669DF6" d="M224.022 0h-92.959c-22.48 0-35.07 15.737-35.07 32.485c0 15.455 10.679 32.485 35.07 32.485h92.959z"></svg:path><svg:ellipse cx="224.022" cy="32.485" fill="#1A73E8" rx="31.979" ry="32.485"></svg:ellipse>`,
})
export class LogosGoogleDataStudioIcon {
  readonly viewBox = input("0 0 256 239")
  readonly width = input("1.08em")
  readonly height = input("1em")
}
