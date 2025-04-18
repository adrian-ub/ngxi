import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsAwsAccountIcon],svg[aws-aws-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="40" height="40" fill="#E7157B"></svg:rect><svg:path fill="#FFF" d="M24.5 22C26.43 22 28 23.57 28 25.5 28 27.43 26.43 29 24.5 29 22.57 29 21 27.43 21 25.5 21 23.57 22.57 22 24.5 22L24.5 22ZM24.5 30C26.981 30 29 27.981 29 25.5 29 23.019 26.981 21 24.5 21 22.019 21 20 23.019 20 25.5 20 27.981 22.019 30 24.5 30L24.5 30ZM26.023 10.88 29.084 17 22.963 17 26.023 10.88ZM22.154 18 29.893 18C30.065 18 30.227 17.91 30.318 17.763 30.409 17.615 30.417 17.432 30.34 17.276L26.471 9.538C26.301 9.2 25.746 9.2 25.576 9.538L21.707 17.276C21.63 17.432 21.638 17.615 21.729 17.763 21.82 17.91 21.981 18 22.154 18L22.154 18ZM11 23 18 23 18 16 11 16 11 23ZM10.5 24 18.5 24C18.776 24 19 23.776 19 23.5L19 15.5C19 15.224 18.776 15 18.5 15L10.5 15C10.224 15 10 15.224 10 15.5L10 23.5C10 23.776 10.224 24 10.5 24L10.5 24ZM8 32 32 32 32 8 8 8 8 32ZM32.5 7 7.5 7C7.224 7 7 7.224 7 7.5L7 32.5C7 32.776 7.224 33 7.5 33L32.5 33C32.776 33 33 32.776 33 32.5L33 7.5C33 7.224 32.776 7 32.5 7L32.5 7Z"></svg:path></svg:g>`,
})
export class AwsAwsAccountIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
