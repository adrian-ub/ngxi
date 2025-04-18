import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojionePlaceOfWorshipIcon],svg[emojione-place-of-worship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#c28fef"><svg:path d="m48.6 25.4l4.4-4L32 2L11 21.4l4.4 4L32 10.1zm-.7 24c1.2-1.2.9-2.9 0-4.1c-3-3.9-6.1-7.8-9.1-11.7c-1-1.3-3-1-4 0c-1.8 1.7-3.5 3.5-5.3 5.2L24 34.2l-1.4 1.5l4.9 7.8c.7 1.5 2.9 1.1 4 0l3.6-3.5l5.6 8.6c-3.4 3.3-5.3 5.2-8.6 8.5c-1.8 1.8-.4 5 2 5h17v-2.9l-9.9-2.9c2.2-2.4 4.5-4.6 6.7-6.9"></svg:path><svg:path d="M30.4 23.5L26.5 27c-.6.5-.6 1.4-.1 2l3.3 4c.5.6 1.4.7 2 .1l3.8-3.4c.6-.5.6-1.4.1-2l-3.3-4c-.5-.6-1.3-.7-1.9-.2"></svg:path></svg:g>`,
})
export class EmojionePlaceOfWorshipIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
