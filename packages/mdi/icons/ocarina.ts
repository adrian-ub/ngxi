import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOcarinaIcon],svg[mdi-ocarina-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12c-3.2-1.6-6.6-2.3-9.2-2.7L9.7 5.9c-.4-1.1-2-1.1-2.4 0L6.3 9C3.9 9.4 2 11.5 2 14c0 2.8 2.2 5 5 5c0 0 7 0 13-3c0 0 2-1 2-2s-2-2-2-2M5 14c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1m2 3c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1m2-3c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1m2 3c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1m5-3c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1m3 1c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1"></svg:path>`,
})
export class MdiOcarinaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
