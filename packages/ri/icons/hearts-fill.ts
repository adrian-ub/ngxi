import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHeartsFillIcon],svg[ri-hearts-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.363 11.045a3.614 3.614 0 0 1 5.084 0a3.55 3.55 0 0 1 0 5.047L17 21.5l-5.447-5.408a3.55 3.55 0 0 1 0-5.047a3.614 3.614 0 0 1 5.084 0l.363.36zm1.88-6.288a6 6 0 0 1 1.689 3.338A5.62 5.62 0 0 0 17 8.808a5.62 5.62 0 0 0-6.856.818a5.55 5.55 0 0 0-.178 7.701l.178.185l2.421 2.404L11 21.485l-8.48-8.492A6 6 0 0 1 11 4.529a6 6 0 0 1 8.242.228"></svg:path>`,
})
export class RiHeartsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
