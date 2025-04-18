import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleChatPreviewIcon],svg[hugeicons-bubble-chat-preview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.867 10q.132.765.133 1.567c0 5.283-4.478 9.566-10 9.566a10.4 10.4 0 0 1-1.935-.179c-.459-.086-.688-.129-.848-.104c-.16.024-.388.145-.842.386a6.5 6.5 0 0 1-4.224.657a5.3 5.3 0 0 0 1.087-2.348c.1-.53-.148-1.045-.52-1.422C3.034 16.411 2 14.105 2 11.567C2 6.607 5.947 2.48 11 2m6.5 3h.009"></svg:path><svg:path d="M21.795 4.59c.137.183.205.275.205.41s-.068.227-.205.41C21.18 6.23 19.61 8 17.5 8s-3.68-1.77-4.295-2.59C13.068 5.226 13 5.134 13 5s.068-.227.205-.41C13.82 3.77 15.39 2 17.5 2s3.68 1.77 4.295 2.59M11.996 12h.008M8 12h.009m7.986 0h.01"></svg:path></svg:g>`,
})
export class HugeiconsBubbleChatPreviewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
