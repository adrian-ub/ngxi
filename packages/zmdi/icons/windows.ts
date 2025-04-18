import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWindowsIcon],svg[zmdi-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 192V80l128-28v138zM363 0v187l-214 3V47zM0 213l128 2v146L0 336zm363 6v186l-214-40V215z"></svg:path>`,
})
export class ZmdiWindowsIcon {
  readonly viewBox = input("0 0 368 408")
  readonly width = input("0.91em")
  readonly height = input("1em")
}
