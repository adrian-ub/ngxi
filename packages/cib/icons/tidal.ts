import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibTidalIcon],svg[cib-tidal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.016 5.323l-5.339 5.339l-5.339-5.339l-5.339 5.339l5.339 5.339l5.339-5.339l5.339 5.339l-5.339 5.339l5.339 5.339l5.339-5.339l-5.339-5.339l5.339-5.339zm5.375 5.338l5.302-5.307L32 10.661l-5.307 5.307z"></svg:path>`,
})
export class CibTidalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
