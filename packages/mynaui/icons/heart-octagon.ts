import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartOctagonIcon],svg[mynaui-heart-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.805 3.469C8.16 3.115 8.451 3 8.937 3h6.126c.486 0 .778.115 1.132.469l4.336 4.336c.354.354.469.646.469 1.132v6.126c0 .5-.125.788-.469 1.132l-4.336 4.336c-.354.354-.646.469-1.132.469H8.937c-.5 0-.788-.125-1.132-.469L3.47 16.195c-.355-.355-.47-.646-.47-1.132V8.937c0-.5.125-.788.469-1.132z"></svg:path><svg:path d="M10.291 9.5a1.78 1.78 0 0 0-1.781 1.781c0 1.969 3.375 4.219 3.375 4.219s3.375-2.25 3.375-4.219c0-1.219-.797-1.781-1.781-1.781c-.698 0-1.302.4-1.594.985a1.78 1.78 0 0 0-1.594-.985"></svg:path></svg:g>`,
})
export class MynauiHeartOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
