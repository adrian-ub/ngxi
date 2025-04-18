import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsServerContentsIcon],svg[aws-server-contents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="40" height="40" fill="#7D8998"></svg:rect><svg:path fill="#FFF" d="M12 34 28 34 28 6 12 6 12 34ZM13 33 27 33 27 7 13 7 13 33ZM15 11 25 11 25 10 15 10 15 11ZM15 15 25 15 25 14 15 14 15 15ZM15 19 25 19 25 18 15 18 15 19Z"></svg:path></svg:g>`,
})
export class AwsServerContentsIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
