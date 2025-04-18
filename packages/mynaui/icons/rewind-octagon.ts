import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRewindOctagonIcon],svg[mynaui-rewind-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"></svg:path><svg:path d="M8.008 10.71C7.336 11.256 7 11.53 7 12s.336.743 1.008 1.29c.185.152.37.295.538.413c.149.104.316.212.49.318c.67.407 1.006.611 1.306.385s.328-.697.383-1.642c.015-.267.025-.53.025-.764c0-.235-.01-.497-.025-.764c-.055-.945-.082-1.417-.383-1.642c-.3-.226-.635-.022-1.306.385a9 9 0 0 0-.49.318a10 10 0 0 0-.538.412m5.75.001c-.672.547-1.008.821-1.008 1.29s.336.743 1.008 1.29c.185.152.37.295.538.413c.149.104.316.212.49.318c.67.407 1.006.611 1.306.385s.328-.697.383-1.642c.015-.267.025-.53.025-.764c0-.235-.01-.497-.025-.764c-.055-.945-.082-1.417-.383-1.642c-.3-.226-.635-.022-1.306.385a9 9 0 0 0-.49.318a10 10 0 0 0-.538.412"></svg:path></svg:g>`,
})
export class MynauiRewindOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
