import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOclockFilledIcon],svg[lsicon-oclock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M7.5 3v1h1V3zM8 6.5c.267 0 .518.07.735.192l2.936-2.568l.658.752l-2.935 2.569a1.5 1.5 0 1 1-2.81.062L5.187 6.39l.624-.78l1.396 1.116c.23-.143.501-.226.792-.226m-5 2h1v-1H3zm9 0h1v-1h-1zM7.5 12v1h1v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOclockFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
