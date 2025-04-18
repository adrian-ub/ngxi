import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsCommandLineInterfaceIcon],svg[aws-command-line-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" fill="#C925D1"></svg:rect><svg:path fill="#FFF" d="M10,11 L10,53 L36,53 L36,51.001 L12,51.001 L12,21 L52,21 L52,51.001 L46,51.001 L46,53 L54,53 L54,11 L10,11 Z M12,19 L52.001,19 L52.001,13.001 L12,13.001 L12,19 Z M22,17 L24.001,17 L24.001,15 L22,15 L22,17 Z M18,17 L20,17 L20,15 L18,15 L18,17 Z M14,17 L16.001,17 L16.001,15 L14,15 L14,17 Z M17.886,26.827 L25.569,34.511 L17.886,42.194 L19.3,43.608 L28.398,34.511 L19.3,25.413 L17.886,26.827 Z M29,40.001 L43,40.001 L43,38 L29,38 L29,40.001 Z"></svg:path></svg:g>`,
})
export class AwsCommandLineInterfaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
