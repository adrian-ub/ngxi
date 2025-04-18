import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationCompassIcon],svg[foundation-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M50 12.5c-20.712 0-37.5 16.793-37.5 37.502S29.288 87.5 50 87.5s37.5-16.788 37.5-37.498S70.712 12.5 50 12.5m0 65.06c-15.199 0-27.56-12.362-27.56-27.558S34.801 22.44 50 22.44s27.56 12.367 27.56 27.562S65.198 77.56 50 77.56"></svg:path><svg:path d="M64.674 32.69L45.129 44.338a1.84 1.84 0 0 0-.646.641L32.69 64.67a1.865 1.865 0 0 0 .291 2.285l.078.078c.359.354.833.539 1.311.539c.328 0 .66-.088.956-.268l19.69-11.789c.262-.16.485-.383.641-.645l11.648-19.545c.437-.729.245-1.738-.349-2.345a1.86 1.86 0 0 0-2.282-.29"></svg:path></svg:g>`,
})
export class FoundationCompassIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
