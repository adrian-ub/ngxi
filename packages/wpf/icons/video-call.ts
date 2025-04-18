import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfVideoCallIcon],svg[wpf-video-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6C2.5 6 0 6.813 0 7.469V18.5c0 .641 2.5 1.5 8.5 1.5s8.5-.813 8.5-1.469V7.5C17 6.859 14.5 6 8.5 6m16.875.031a.9.9 0 0 0-.469.157l-6.5 4.187c-.25.188-.406.498-.406.813v3.624c0 .315.156.624.406.813l6.5 4.188c.176.133 1.032.55 1.032-.813V7c0-.787-.271-.981-.563-.969"></svg:path>`,
})
export class WpfVideoCallIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
