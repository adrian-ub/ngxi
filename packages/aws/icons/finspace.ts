import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsFinspaceIcon],svg[aws-finspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" fill="#8C4FFF"></svg:rect><svg:path fill="#FFF" d="M10,34 L13,34 L13,14.014 L10,15.956 L10,34 Z M18,10.779 L15,12.72 L15,34 L18,34 L18,10.779 Z M20,9.485 L20,34 L24,34 L24,9.485 L22,8.191 L20,9.485 Z M29,12.72 L26,10.779 L26,34 L29,34 L29,12.72 Z M34,15.956 L31,14.014 L31,34 L34,34 L34,15.956 Z M40,36 L4,36 L4,34 L8,34 L8,17.25 L5.543,18.839 L4.457,17.161 L21.457,6.161 C21.787,5.947 22.213,5.947 22.543,6.161 L39.543,17.161 L38.457,18.839 L36,17.25 L36,34 L40,34 L40,36 Z M2,40 L10,40 L10,38 L2,38 L2,40 Z M13,40 L31,40 L31,38 L13,38 L13,40 Z M34,40 L42,40 L42,38 L34,38 L34,40 Z M0,44 L20,44 L20,42 L0,42 L0,44 Z M24,44 L44,44 L44,42 L24,42 L24,44 Z M1.555,15.832 L0.445,14.168 L21.445,0.168 C21.781,-0.056 22.219,-0.056 22.555,0.168 L43.555,14.168 L42.445,15.832 L22,2.202 L1.555,15.832 Z" transform="translate(10 10)"></svg:path></svg:g>`,
})
export class AwsFinspaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
