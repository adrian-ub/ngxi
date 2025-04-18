import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneOwlIcon],svg[emojione-owl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#c7e755"><svg:ellipse cx="32" cy="33.5" rx="22.3" ry="25.9"></svg:ellipse><svg:path d="M52 43.5H12l20-27.4z"></svg:path></svg:g><svg:path fill="#a3bf2c" d="m47.1 51l-3.8 4.2l-3.8-4.2l3.8-4.3zM32 51l-3.8 4.2l-3.7-4.2l3.7-4.3zm-7.5 0l-3.8 4.2l-3.8-4.2l3.8-4.3zm15 0l-3.7 4.2L32 51l3.8-4.3z"></svg:path><svg:path fill="#c7e755" d="M43.3 46.7L39.5 51l-3.7-4.3l3.7-4.3zm7.5 0L47.1 51l-3.8-4.3l3.8-4.3zm-22.6 0L24.5 51l-3.8-4.3l3.8-4.3zm-7.5 0L16.9 51l-3.7-4.3l3.7-4.3zm15.1 0L32 51l-3.8-4.3l3.8-4.3z"></svg:path><svg:g fill="#a3bf2c"><svg:path d="m47.1 42.4l-3.8 4.3l-3.8-4.3l3.8-4.2zm-15.1 0l-3.8 4.3l-3.7-4.3l3.7-4.2zm-7.5 0l-3.8 4.3l-3.8-4.3l3.8-4.2z"></svg:path><svg:path d="m39.5 42.4l-3.7 4.3l-3.8-4.3l3.8-4.2z"></svg:path></svg:g><svg:path fill="#c28fef" d="M7 30S5.5 47 18.1 54.5c4.1 2.4-2.5-3.6-.8-18.4zm50 0s1.5 17-11.1 24.5c-4.1 2.4 2.5-3.6.8-18.4z"></svg:path><svg:g fill="#9450e0"><svg:path d="M32 2c-7.1 7-15 .9-15 .9c4.9 8.8 15 10.4 15 10.4s10.1-1.6 15-10.4c0 0-7.9 6.1-15-.9"></svg:path><svg:path d="M18.8 39.4C9.5 39.4 2 31.9 2 22.6S9.5 5.9 18.8 5.9s16.8 7.5 16.8 16.8S28 39.4 18.8 39.4"></svg:path><svg:path d="M45.2 39.4c-9.2 0-16.8-7.5-16.8-16.8S36 5.9 45.2 5.9S62 13.4 62 22.6s-7.5 16.8-16.8 16.8"></svg:path></svg:g><svg:circle cx="45.1" cy="22.6" r="13.1" fill="#c7e755"></svg:circle><svg:circle cx="45.1" cy="22.6" r="9.4" fill="#fff"></svg:circle><svg:circle cx="45.1" cy="22.6" r="5.6" fill="#3e4347"></svg:circle><svg:g fill="#c7e755"><svg:path d="M32.5 9.5c0 3.1-.5 5.6-.5 5.6s-.5-2.5-.5-5.6s.5-5.6.5-5.6s.5 2.5.5 5.6m-2.8.8c1 2.1 1.3 3.9 1.3 3.9s-1.4-1.5-2.4-3.6s-1.3-3.9-1.3-3.9s1.4 1.5 2.4 3.6m4.6 0c-1 2.1-1.3 3.9-1.3 3.9s1.4-1.5 2.4-3.6s1.3-3.9 1.3-3.9s-1.4 1.5-2.4 3.6"></svg:path><svg:circle cx="18.9" cy="22.6" r="13.1"></svg:circle></svg:g><svg:circle cx="18.9" cy="22.6" r="9.4" fill="#fff"></svg:circle><svg:circle cx="18.9" cy="22.6" r="5.6" fill="#3e4347"></svg:circle><svg:path fill="#ffce31" d="M28.2 31.1c0 3.2 1.5 6.1 3.8 8c2.3-1.9 3.8-4.8 3.8-8s-1.5-6.1-3.8-8c-2.3 1.9-3.8 4.7-3.8 8"></svg:path><svg:g fill="#f2b200"><svg:path d="M32 23.1v16c2.3-1.9 3.8-4.8 3.8-8s-1.5-6.1-3.8-8M18.8 54.9c0 2.5-2 6.1-2 6.1s-2-3.7-2-6.1c0-2.5 4-2.5 4 0m6.6 0c0 2.5-2 6.1-2 6.1s-2-3.7-2-6.1c0-2.5 4-2.5 4 0"></svg:path><svg:path d="M22.1 54.3c0 3.1-2 7.7-2 7.7s-2-4.6-2-7.7s4-3.1 4 0m20.5.6c0 2.5-2 6.1-2 6.1s-2-3.7-2-6.1c0-2.5 4-2.5 4 0m6.6 0c0 2.5-2 6.1-2 6.1s-2-3.7-2-6.1c0-2.5 4-2.5 4 0"></svg:path><svg:path d="M45.9 54.3c0 3.1-2 7.7-2 7.7s-2-4.6-2-7.7s4-3.1 4 0"></svg:path></svg:g>`,
})
export class EmojioneOwlIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
