import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsElementalServerIcon],svg[aws-elemental-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" fill="#ED7100"></svg:rect><svg:path fill="#FFF" d="M37.968,42.005 L33,44.848 L28.032,42.005 L28.032,36.335 L33,33.492 L37.968,36.335 L37.968,42.005 Z M39.968,35.755 C39.968,35.397 39.776,35.065 39.465,34.887 L33.497,31.472 C33.189,31.296 32.812,31.296 32.503,31.472 L26.535,34.887 C26.225,35.065 26.032,35.397 26.032,35.755 L26.032,38 L12,38 L12,40 L26.032,40 L26.032,42.585 C26.032,42.943 26.225,43.275 26.535,43.453 L32,46.581 L32,52 L34,52 L34,46.581 L39.465,43.453 C39.776,43.275 39.968,42.943 39.968,42.585 L39.968,40 L52,40 L52,38 L39.968,38 L39.968,35.755 Z M15,21 L20,21 L20,19 L15,19 L15,21 Z M37,21 L49,21 L49,19 L37,19 L37,21 Z M12,26 L52,26 L52,14 L12,14 L12,26 Z M53,12 L11,12 C10.447,12 10,12.448 10,13 L10,27 C10,27.552 10.447,28 11,28 L53,28 C53.553,28 54,27.552 54,27 L54,13 C54,12.448 53.553,12 53,12 L53,12 Z"></svg:path></svg:g>`,
})
export class AwsElementalServerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
