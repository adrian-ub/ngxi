import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsWeightsandbiasesIcon],svg[simple-icons-weightsandbiases-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.48 0a1.55 1.55 0 1 0 0 3.1a1.55 1.55 0 0 0 0-3.1m19.04 0a1.55 1.55 0 1 0 0 3.101a1.55 1.55 0 0 0 0-3.101M12 2.295a1.55 1.55 0 1 0 0 3.1a1.55 1.55 0 0 0 0-3.1M2.48 5.272a2.48 2.48 0 1 0 0 4.96a2.48 2.48 0 0 0 0-4.96m19.04 0a2.48 2.48 0 1 0 0 4.96a2.48 2.48 0 0 0 0-4.96M12 8.496a1.55 1.55 0 1 0 0 3.1a1.55 1.55 0 0 0 0-3.1m-9.52 3.907a1.55 1.55 0 1 0 0 3.1a1.55 1.55 0 0 0 0-3.1m19.04 0a1.55 1.55 0 1 0 0 3.102a1.55 1.55 0 0 0 0-3.102M12 13.767a2.48 2.48 0 1 0 0 4.962a2.48 2.48 0 0 0 0-4.962m-9.52 3.907a2.48 2.48 0 1 0 .001 4.962a2.48 2.48 0 0 0 0-4.962zm19.04.93a1.55 1.55 0 1 0 0 3.102a1.55 1.55 0 0 0 0-3.101zM12 20.9a1.55 1.55 0 1 0 0 3.1a1.55 1.55 0 0 0 0-3.1"></svg:path>`,
})
export class SimpleIconsWeightsandbiasesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
