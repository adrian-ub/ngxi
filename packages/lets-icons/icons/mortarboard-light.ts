import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMortarboardLightIcon],svg[lets-icons-mortarboard-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.843 8.125l7.345-3.264a2 2 0 0 1 1.624 0l7.345 3.264a.41.41 0 0 1 0 .75l-7.345 3.264a2 2 0 0 1-1.624 0L3.843 8.875a.41.41 0 0 1 0-.75M20.5 8.5v4"></svg:path><svg:path d="M6.5 10.5v5s.5 2 5.5 2s5.5-2 5.5-2v-5"></svg:path></svg:g>`,
})
export class LetsIconsMortarboardLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
