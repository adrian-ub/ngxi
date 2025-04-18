import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsManagementGovernanceIcon],svg[aws-management-governance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" x="5" y="5" fill="#E7157B"></svg:rect><svg:rect width="72" height="72" x="1" y="1" stroke="#879196" stroke-width="2"></svg:rect><svg:path fill="#FFF" d="M22,28 L5,28 L5,26 L22,26 L22,24 L24,24 L24,26 L28,26 L28,28 L24,28 L24,30 L22,30 L22,28 Z M10,20 L5,20 L5,18 L10,18 L10,16 L12,16 L12,18 L28,18 L28,20 L12,20 L12,22 L10,22 L10,20 Z M22,5 L32,5 L32,2 L22,2 L22,5 Z M40.842,2 L34,2 L34,1 C34,0.448 33.553,0 33,0 L21,0 C20.447,0 20,0.448 20,1 L20,2 L13.158,2 C11.417,2 10,3.417 10,5.158 L10,9 L12,9 L12,5.158 C12,4.52 12.52,4 13.158,4 L20,4 L20,6 C20,6.552 20.447,7 21,7 L33,7 C33.553,7 34,6.552 34,6 L34,4 L40.842,4 C41.48,4 42,4.52 42,5.158 L42,40.842 C42,41.48 41.48,42 40.842,42 L14.158,42 C13.52,42 13,41.48 13,40.842 L13,38 L11,38 L11,40.842 C11,42.583 12.417,44 14.158,44 L40.842,44 C42.583,44 44,42.583 44,40.842 L44,5.158 C44,3.417 42.583,2 40.842,2 L40.842,2 Z M2,34 L31,34 L31,13 L2,13 L2,34 Z M33,35 L33,12 C33,11.448 32.553,11 32,11 L1,11 C0.447,11 0,11.448 0,12 L0,35 C0,35.552 0.447,36 1,36 L32,36 C32.553,36 33,35.552 33,35 L33,35 Z" transform="translate(15 15)"></svg:path></svg:g>`,
})
export class AwsManagementGovernanceIcon {
  readonly viewBox = input("0 0 74 74")
  readonly width = input("1em")
  readonly height = input("1em")
}
