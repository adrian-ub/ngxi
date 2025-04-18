import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsWorkmailIcon],svg[aws-workmail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" fill="#DD344C"></svg:rect><svg:path fill="#FFF" d="M12,52 L12,13.414 L31.293,32.707 C31.488,32.902 31.744,33 32,33 C32.256,33 32.512,32.902 32.707,32.707 L52,13.414 L52,52 L12,52 Z M50.586,12 L32,30.586 L13.414,12 L50.586,12 Z M53,10 L11,10 C10.447,10 10,10.448 10,11 L10,53 C10,53.552 10.447,54 11,54 L53,54 C53.553,54 54,53.552 54,53 L54,11 C54,10.448 53.553,10 53,10 L53,10 Z"></svg:path></svg:g>`,
})
export class AwsWorkmailIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
