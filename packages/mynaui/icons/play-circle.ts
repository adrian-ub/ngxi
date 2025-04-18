import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiPlayCircleIcon],svg[mynaui-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M13.242 10.71c.672.547 1.008.821 1.008 1.29s-.336.743-1.008 1.29c-.185.152-.37.295-.538.413a9 9 0 0 1-.49.318c-.67.407-1.006.611-1.306.385s-.328-.697-.383-1.642A14 14 0 0 1 10.5 12c0-.235.01-.497.025-.764c.055-.945.082-1.417.383-1.642c.3-.226.636-.022 1.306.385c.174.106.341.214.49.318c.169.118.353.261.538.412"></svg:path></svg:g>`,
})
export class MynauiPlayCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
