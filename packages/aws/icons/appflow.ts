import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsAppflowIcon],svg[aws-appflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" fill="#E7157B"></svg:rect><svg:path fill="#FFF" d="M37.219,0 L23.376,0 L11.249,20.387 L10.644,18.128 L8.712,18.646 L10.297,24.559 L16.21,22.975 L15.693,21.043 L12.711,21.842 L24.513,2 L36.065,2 L41.839,12 L36.065,22 L30.144,22 L30.144,24 L37.219,24 L44.148,12 L37.219,0 Z M32.254,13.671 L20.787,34 L6.928,34 L0,22 L6.928,10 L13.144,10 L13.144,12 L8.082,12 L2.309,22 L8.082,32 L19.619,32 L30.818,12.147 L27.795,12.957 L27.278,11.025 L33.192,9.441 L34.776,15.354 L32.844,15.872 L32.254,13.671 Z" transform="translate(10 15)"></svg:path></svg:g>`,
})
export class AwsAppflowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
