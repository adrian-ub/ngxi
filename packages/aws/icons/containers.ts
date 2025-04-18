import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsContainersIcon],svg[aws-containers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" x="5" y="5" fill="#ED7100"></svg:rect><svg:rect width="72" height="72" x="1" y="1" stroke="#879196" stroke-width="2"></svg:rect><svg:path fill="#FFF" d="M4,38 L40,38 L40,24 L4,24 L4,38 Z M2,42 L42,42 L42,40 L2,40 L2,42 Z M42,24 L42,38 L43,38 C43.553,38 44,38.448 44,39 L44,43 C44,43.552 43.553,44 43,44 L1,44 C0.447,44 0,43.552 0,43 L0,39 C0,38.448 0.447,38 1,38 L2,38 L2,24 L1,24 C0.447,24 0,23.552 0,23 L0,19 C0,18.643 0.198,18.344 0.48,18.167 L0.471,18.152 L15.671,8.652 L16.731,10.348 L4.488,18 L29,18 L29,20 L2,20 L2,22 L42,22 L42,20 L31,20 L31,18 L39.512,18 L27.269,10.348 L28.329,8.652 L43.529,18.152 L43.52,18.167 C43.802,18.344 44,18.643 44,19 L44,23 C44,23.552 43.553,24 43,24 L42,24 Z M22,10 C23.93,10 25.5,8.43 25.5,6.5 L23.5,6.5 C23.5,7.327 22.827,8 22,8 C21.173,8 20.5,7.327 20.5,6.5 C20.5,5.673 21.173,5 22,5 C22.553,5 23,4.552 23,4 L23,0 L21,0 L21,3.146 C19.556,3.577 18.5,4.917 18.5,6.5 C18.5,8.43 20.07,10 22,10 L22,10 Z M6,36 L8,36 L8,26 L6,26 L6,36 Z M11,36 L13,36 L13,26 L11,26 L11,36 Z M16,36 L18,36 L18,26 L16,26 L16,36 Z M36,36 L38,36 L38,26 L36,26 L36,36 Z M31,36 L33,36 L33,26 L31,26 L31,36 Z M26,36 L28,36 L28,26 L26,26 L26,36 Z M21,36 L23,36 L23,26 L21,26 L21,36 Z" transform="translate(15 14)"></svg:path></svg:g>`,
})
export class AwsContainersIcon {
  readonly viewBox = input("0 0 74 74")
  readonly width = input("1em")
  readonly height = input("1em")
}
