import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsPrivateSubnetIcon],svg[aws-private-subnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="40" height="40" fill="#00A4A6"></svg:rect><svg:path fill="#FFF" d="M19.536 22.049C20.642 22.049 21.542 22.948 21.542 24.054 21.542 25.16 20.642 26.06 19.536 26.06 18.43 26.06 17.53 25.16 17.53 24.054 17.53 22.948 18.43 22.049 19.536 22.049L19.536 22.049ZM19.012 27.007 19.012 30.501 20.012 30.501 20.012 27.012C21.442 26.782 22.542 25.549 22.542 24.054 22.542 22.397 21.193 21.049 19.536 21.049 17.879 21.049 16.53 22.397 16.53 24.054 16.53 25.532 17.604 26.757 19.012 27.007L19.012 27.007ZM10 33.014 29.012 33.014 29.012 18 10 18 10 33.014ZM14.046 12.484C14.046 9.46 16.506 7 19.529 7 22.553 7 25.012 9.46 25.012 12.484L25.012 17 14.046 17 14.046 12.484ZM29.512 17 26.012 17 26.012 12.484C26.012 8.908 23.103 6 19.529 6 15.954 6 13.046 8.908 13.046 12.484L13.046 17 9.5 17C9.223 17 9 17.224 9 17.5L9 33.514C9 33.79 9.223 34.014 9.5 34.014L29.512 34.014C29.788 34.014 30.012 33.79 30.012 33.514L30.012 17.5C30.012 17.224 29.788 17 29.512 17L29.512 17Z"></svg:path></svg:g>`,
})
export class AwsPrivateSubnetIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
