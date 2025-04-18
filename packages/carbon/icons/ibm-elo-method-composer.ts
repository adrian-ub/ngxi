import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmEloMethodComposerIcon],svg[carbon-ibm-elo-method-composer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.76 10.463l-3.297 3.297a1.586 1.586 0 0 0 0 2.24l12.004 12H28v-5.533L16 10.463a1.586 1.586 0 0 0-2.24 0M26 23.296V26h-2.704l-7.441-7.44l2.704-2.705zm-8.855-8.855l-2.704 2.704l-2.267-2.267l2.704-2.704z"></svg:path><svg:path fill="currentColor" d="M28 2v8h-8V8h4.92C22.67 5.47 19.46 4 16 4C9.39 4 4 9.38 4 16c0 6.61 5.39 12 12 12h1v2h-1C8.28 30 2 23.72 2 16S8.28 2 16 2c3.83 0 7.4 1.55 10 4.23V2z"></svg:path>`,
})
export class CarbonIbmEloMethodComposerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
