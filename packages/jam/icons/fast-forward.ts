import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamFastForwardIcon],svg[jam-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 12.085l-4.51 5.225a1.966 1.966 0 0 1-2.814.182A2.05 2.05 0 0 1 8 15.966v-3.88L3.49 17.31a1.966 1.966 0 0 1-2.814.182A2.05 2.05 0 0 1 0 15.966V2.034C0 .911.893 0 1.994 0c.573 0 1.118.251 1.496.69L8 5.915v-3.88C8 .91 8.893 0 9.994 0c.573 0 1.118.251 1.496.69L16 5.915V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm0-3.078v-.014L9.994 2.034V8.84q.012.161 0 .322v6.805zM1.994 2.034v13.932L8.006 9zM18 2v14h2V2z"></svg:path>`,
})
export class JamFastForwardIcon {
  readonly viewBox = input("-1 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
