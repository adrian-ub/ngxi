import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAlienIcon],svg[streamline-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5.5c0 3.59-2.95 8-6.5 8S.5 9.09.5 5.5S3.41.5 7 .5s6.5 1.41 6.5 5"></svg:path><svg:path d="M2.75 4.75a3.12 3.12 0 0 0 .49 2.44a3.12 3.12 0 0 0 2.44.49a3.12 3.12 0 0 0-.49-2.44a3.12 3.12 0 0 0-2.44-.49m8.5 0a3.12 3.12 0 0 1-.49 2.44a3.12 3.12 0 0 1-2.44.49a3.12 3.12 0 0 1 .49-2.44a3.12 3.12 0 0 1 2.44-.49"></svg:path></svg:g>`,
})
export class StreamlineAlienIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
