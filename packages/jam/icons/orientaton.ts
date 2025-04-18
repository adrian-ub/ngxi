import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamOrientatonIcon],svg[jam-orientaton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10.941v7h12v-7zm0-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2m9.012-2h-2V2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H18v-2h.012V2h-7z"></svg:path>`,
})
export class JamOrientatonIcon {
  readonly viewBox = input("0 0 21 20")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
