import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsGenericRedIcon],svg[aws-generic-red-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="40" height="40" fill="#DD344C" fill-rule="evenodd"></svg:rect>`,
})
export class AwsGenericRedIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
