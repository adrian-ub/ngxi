import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiDisqusIcon],svg[zmdi-disqus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219 157q26 0 42 13t16 38t-16 38t-42 13h-23V157zm2-157q85 0 145.5 61T427 208t-60.5 147T221 416q-75 0-133-49L0 379l34-85q-18-41-18-86q0-86 60-147T221 0m112 207q0-46-30.5-74T219 105h-78v206h76q54 0 85-29t31-75"></svg:path>`,
})
export class ZmdiDisqusIcon {
  readonly viewBox = input("0 0 432 416")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
