import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsEc2InstanceContentsIcon],svg[aws-ec2-instance-contents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="40" height="40" fill="#ED7100"></svg:rect><svg:path fill="#FFF" d="M10 29 29 29 29 10 10 10 10 29ZM33 12 33 11 30 11 30 9.5C30 9.224 29.776 9 29.5 9L28 9 28 6 27 6 27 9 24 9 24 6 23 6 23 9 20 9 20 6 19 6 19 9 16 9 16 6 15 6 15 9 12 9 12 6 11 6 11 9 9.5 9C9.224 9 9 9.224 9 9.5L9 11 6 11 6 12 9 12 9 15 6 15 6 16 9 16 9 19 6 19 6 20 9 20 9 23 6 23 6 24 9 24 9 27 6 27 6 28 9 28 9 29.5C9 29.776 9.224 30 9.5 30L11 30 11 33 12 33 12 30 15 30 15 33 16 33 16 30 19 30 19 33 20 33 20 30 23 30 23 33 24 33 24 30 27 30 27 33 28 33 28 30 29.5 30C29.776 30 30 29.776 30 29.5L30 28 33 28 33 27 30 27 30 24 33 24 33 23 30 23 30 20 33 20 33 19 30 19 30 16 33 16 33 15 30 15 30 12 33 12Z"></svg:path></svg:g>`,
})
export class AwsEc2InstanceContentsIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
