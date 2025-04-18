import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMouseIcon],svg[emojione-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fc97b2" d="M24.9 46c-.7.2-1.5.6-2.2 1s-1.4.9-2 1.4s-1.1 1.1-1.5 1.7s-.7 1.2-.8 1.8s0 1.2.3 1.8s.8 1.2 1.4 1.8c.3.3.6.5 1 .8c.3.3.7.5 1.1.7c.7.4 1.5.8 2.3 1.1c1.6.6 3.4.9 5.2 1.2s3.7.5 5.5.7c1.9.2 3.7.5 5.6.8c1.8.3 3.7.7 5.5 1.1c-1.8-.2-3.7-.4-5.6-.6c-1.9-.1-3.7-.2-5.6-.3s-3.7-.1-5.6-.2s-3.8-.3-5.7-.8c-1-.3-1.9-.6-2.8-1c-.5-.2-.9-.5-1.3-.7c-.4-.3-.9-.5-1.3-.9c-.8-.6-1.6-1.4-2.3-2.4c-.3-.5-.6-1.1-.7-1.7c-.2-.6-.2-1.2-.2-1.8q0-.9.3-1.8c.2-.6.4-1.1.7-1.6c.5-1 1.2-1.9 1.9-2.6q1.05-1.2 2.4-2.1c.9-.6 1.8-1.2 2.8-1.6z"></svg:path><svg:g fill="#c4c5c6"><svg:path d="M43 51.9c0 4.2-5.5 5.5-11 5.5S21 56 21 51.9c0-13.8 8.1-18.1 11-18.1c2.8 0 11 4.2 11 18.1"></svg:path><svg:path d="M29.6 56.4c0 1.2-1 2.1-2.2 2.1h-1.5c-1.2 0-2.2-.9-2.2-2.1s1-2.1 2.2-2.1h1.5c1.2 0 2.2.9 2.2 2.1m10.8 0c0 1.2-1 2.1-2.2 2.1h-1.5c-1.2 0-2.2-.9-2.2-2.1s1-2.1 2.2-2.1h1.5c1.2 0 2.2.9 2.2 2.1"></svg:path></svg:g><svg:circle cx="44.6" cy="12.4" r="10.4" fill="#b5b5b5"></svg:circle><svg:circle cx="44.5" cy="13.6" r="7.7" fill="#ffc5d3"></svg:circle><svg:circle cx="19.4" cy="12.4" r="10.4" fill="#b5b5b5"></svg:circle><svg:circle cx="19.5" cy="13.6" r="7.7" fill="#ffc5d3"></svg:circle><svg:path fill="#c4c5c6" d="M44.6 22.8C42.9 19 38.9 10.6 32 10.6S21.1 19 19.4 22.8c-.9 1.9-1.6 3.8-1.9 6.6c-.5 4.9 5.3 9.1 8.5 9.1c1.5 0 3.1 2.9 6 2.9s4.5-2.9 6-2.9c3.2 0 9-4.2 8.5-9.1c-.2-2.7-1-4.6-1.9-6.6"></svg:path><svg:g fill="#ffc5d3"><svg:ellipse cx="41.7" cy="33.8" rx="3.2" ry="2.2"></svg:ellipse><svg:ellipse cx="22.3" cy="33.8" rx="3.2" ry="2.2"></svg:ellipse></svg:g><svg:path fill="#3e4347" d="M34.9 33.8c-.6-.6-2.4-.7-2.9-.7s-2.3 0-2.9.7c-.4.4-.1 1.5 1 2.4c.7.6 1.4.8 1.9.8s1.2-.2 1.9-.8c1.1-.9 1.4-2 1-2.4"></svg:path><svg:ellipse cx="25.2" cy="26.7" fill="#fff" rx="4.6" ry="4.5"></svg:ellipse><svg:ellipse cx="25.2" cy="26.7" fill="#3e4347" rx="3.2" ry="3.1"></svg:ellipse><svg:ellipse cx="38.8" cy="26.7" fill="#fff" rx="4.6" ry="4.5"></svg:ellipse><svg:g fill="#3e4347"><svg:ellipse cx="38.8" cy="26.7" rx="3.2" ry="3.1"></svg:ellipse><svg:path d="M31 39.3c.1-.3.3-.5.5-.7s.5-.3.7-.4c.3-.1.5-.2.8-.2s.6 0 .8.3c-.3 0-.5.2-.7.3s-.4.2-.7.3c-.2.1-.5.2-.7.3c-.2 0-.4 0-.7.1"></svg:path></svg:g>`,
})
export class EmojioneMouseIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
