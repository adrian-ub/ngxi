import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMosqueIcon],svg[mdi-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8h10c.3 0 .6.1.8.1c.1-.3.2-.7.2-1c0-1.3-.6-2.5-1.7-3.2L12 1L7.7 3.8c-1 .8-1.7 2-1.7 3.3c0 .4.1.7.2 1c.2 0 .5-.1.8-.1m17-1c0-1.1-2-3-2-3s-2 1.9-2 3c0 .7.4 1.4 1 1.7V13h-2v-2c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2H3V8.7c.6-.3 1-1 1-1.7c0-1.1-2-3-2-3S0 5.9 0 7c0 .7.4 1.4 1 1.7V21h9v-4c0-1.1.9-2 2-2s2 .9 2 2v4h9V8.7c.6-.3 1-1 1-1.7"></svg:path>`,
})
export class MdiMosqueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
