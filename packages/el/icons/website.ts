import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elWebsiteIcon],svg[el-website-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M698.598 922.244h-199.6V722.646h199.6zm252.506 0H751.503V722.646h199.601zm-505.012 0H246.493V722.646h199.599zm505.012-631.262v367.936h-704.61V290.982zm101-105.812H147.896v829.66h904.209zM0 1161.521V38.478h1200v1123.045z"></svg:path>`,
})
export class ElWebsiteIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
