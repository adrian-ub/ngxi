import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNetflixIcon],svg[streamline-netflix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.504.791H2.512l5.236 11.53l3.74.888L5.504.79Z"></svg:path><svg:path d="M2.512.791v12.418l2.618-.887V6.547m6.359 6.662V.79H8.871v6.982"></svg:path></svg:g>`,
})
export class StreamlineNetflixIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
