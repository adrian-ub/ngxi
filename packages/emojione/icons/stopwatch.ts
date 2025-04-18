import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneStopwatchIcon],svg[emojione-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d0d0" d="M32 0c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6m0 10.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3"></svg:path><svg:path fill="#4e5c66" d="M30.5 8.6h3v6.5h-3z"></svg:path><svg:path fill="#647a87" d="M34.5 11.6h-5V5.9c0-1.5 5-1.5 5 0z"></svg:path><svg:path fill="#4e5c66" d="m10.737 20.686l2.969-2.97l2.97 2.969l-2.968 2.97z"></svg:path><svg:path fill="#647a87" d="m15.6 17.6l-5 5l-3.1-3.1c-.6-.6-.6-1.6 0-2.2l2.8-2.8c.6-.6 1.6-.6 2.2 0z"></svg:path><svg:path fill="#4e5c66" d="m47.344 20.705l2.97-2.97l2.97 2.97l-2.97 2.97z"></svg:path><svg:g fill="#647a87"><svg:path d="m53.4 22.6l-5-5l3.1-3.1c.6-.6 1.6-.6 2.2 0l2.8 2.8c.6.6.6 1.6 0 2.2z"></svg:path><svg:circle cx="32" cy="39" r="25"></svg:circle></svg:g><svg:circle cx="32" cy="39" r="21.7" fill="#d2d3d5"></svg:circle><svg:circle cx="32" cy="39" r="20" fill="#fff"></svg:circle><svg:path fill="#ed4c5c" d="M52 39c0 5.5-2.2 10.5-5.8 14.1L32 39V19c11 0 20 9 20 20"></svg:path><svg:g fill="#3e4347"><svg:path d="M43.5 50.4L33.3 38.3l-2 2zM31.3 20.7h1.4v5.6h-1.4zm0 31h1.4v5.6h-1.4zM13.7 38.3h5.6v1.4h-5.6zm31 0h5.6v1.4h-5.6zM22.178 23.463l1.213-.7l1.4 2.425l-1.213.7zm-6.45 7l.7-1.212l2.425 1.4l-.7 1.213zm.033 17.149l2.424-1.402l.7 1.212l-2.423 1.402zm6.491 6.964l1.4-2.425l1.212.7l-1.4 2.425zm16.906-1.85l1.212-.7l1.4 2.425l-1.211.7zM45.1 47.43l.7-1.213l2.425 1.401l-.7 1.213zm-.074-16.802l2.424-1.4l.7 1.212l-2.424 1.4zm-5.89-5.478l1.401-2.424l1.212.7l-1.4 2.425z"></svg:path><svg:circle cx="32" cy="39" r="2.8"></svg:circle></svg:g>`,
})
export class EmojioneStopwatchIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
