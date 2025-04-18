import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilCursorSolidIcon],svg[basil-cursor-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.407 2.486c-.917-.612-2.251.046-2.152 1.238l.029.347a86 86 0 0 0 2.79 15.693c.337 1.224 2.03 1.33 2.544.195l2.129-4.697c.203-.449.697-.737 1.234-.68l5.266.564c1.209.13 2.063-1.346 1.094-2.281A91 91 0 0 0 7.703 2.684z"></svg:path>`,
})
export class BasilCursorSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
