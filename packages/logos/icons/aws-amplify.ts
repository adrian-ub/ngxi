import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAwsAmplifyIcon],svg[logos-aws-amplify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosAwsAmplify0" x1="100%" x2="0%" y1="22.172%" y2="77.828%"><svg:stop offset="0%" stop-color="#F90"></svg:stop><svg:stop offset="100%" stop-color="#FFC300"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosAwsAmplify0)" d="M55.71 158.476h72.106l18.47 32.508H0l51.364-89.006L72.89 64.706l18.48 32.022zM82.6 47.85l17.744-30.746l100.42 173.88h-35.562zM110.221 0h35.516L256 190.984h-35.56z"></svg:path>`,
})
export class LogosAwsAmplifyIcon {
  readonly viewBox = input("0 0 256 191")
  readonly width = input("1.35em")
  readonly height = input("1em")
}
