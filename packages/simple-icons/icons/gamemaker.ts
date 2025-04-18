import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGamemakerIcon],svg[simple-icons-gamemaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.012 11.994L12.006 0l11.982 12.006h-6.831l-5.163-5.151l-5.151 5.151l5.163 5.151v-5.151h5.151v6.903L12.006 24z"></svg:path>`,
})
export class SimpleIconsGamemakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
