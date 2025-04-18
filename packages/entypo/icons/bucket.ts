import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoBucketIcon],svg[entypo-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1C6.092 1 3.002 2.592 3.21 3.95c.06.389.225 1.945.434 3.273C1.239 8.157.442 9.672.549 10.907c.127 1.461 1.441 3.025 4.328 3.295c1.648.154 3.631-.75 4.916-2.295a1.4 1.4 0 1 1 1.238.691c-1.529 1.973-3.858 3.164-6.064 3.025c.051.324.07.947.096 1.113c.09.579 2.347 2.26 5.937 2.264c3.59-.004 5.847-1.685 5.938-2.263c.088-.577 1.641-11.409 1.852-12.787C18.998 2.592 15.907 1 11 1m-9.057 9.785c-.055-.643.455-1.498 1.924-2.139l.643 4.074c-1.604-.313-2.498-1.149-2.567-1.935M11 6.024C7.41 6.022 4.863 4.69 4.863 4.192C4.861 3.698 7.41 2.402 11 2.404c3.59-.002 6.139 1.294 6.137 1.788c0 .498-2.547 1.83-6.137 1.832"></svg:path>`,
})
export class EntypoBucketIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
