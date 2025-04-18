import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsKitIcon],svg[simple-icons-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5 11.633l-2.434 2.408V8.687a.53.53 0 0 0-.533-.527a.53.53 0 0 0-.533.527v6.624a.53.53 0 0 0 .532.526a.53.53 0 0 0 .377-.153l2.974-2.939l2.974 2.94a.535.535 0 0 0 .754 0a.52.52 0 0 0 0-.746l-2.974-2.938L7.61 9.06a.52.52 0 0 0 0-.745a.54.54 0 0 0-.753 0l-3.344 3.307q-.004.001-.007.005zm8.826 4.206a.53.53 0 0 1-.533-.526V8.688a.53.53 0 0 1 .533-.528a.53.53 0 0 1 .533.528v6.624a.53.53 0 0 1-.533.526zm7.257-6.624v6.098c0 .29.238.526.532.526a.53.53 0 0 0 .533-.526V9.215h2.818A.53.53 0 0 0 24 8.688a.53.53 0 0 0-.533-.527h-6.702a.53.53 0 0 0-.533.527a.53.53 0 0 0 .533.527h2.819z"></svg:path>`,
})
export class SimpleIconsKitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
