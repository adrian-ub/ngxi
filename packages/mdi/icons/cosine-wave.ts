import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCosineWaveIcon],svg[mdi-cosine-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v2c-1.74 0-3 4.58-4.04 8.27c-1.39 5-2.7 9.73-5.96 9.73s-4.57-4.73-5.96-9.73C5 8.58 3.74 4 2 4V2c3.26 0 4.57 4.73 5.96 9.73C9 15.42 10.26 20 12 20s3-4.58 4.04-8.27C17.43 6.73 18.74 2 22 2"></svg:path>`,
})
export class MdiCosineWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
