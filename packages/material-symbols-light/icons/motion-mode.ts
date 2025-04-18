import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMotionModeIcon],svg[material-symbols-light-motion-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.27 5.292v13.416q-.599-.598-1.07-1.294t-.815-1.466V8.052q.344-.77.815-1.465q.471-.697 1.07-1.295M9.038 2.97v18.062q-.756-.252-1.458-.618t-1.312-.853V4.44q.61-.486 1.312-.853t1.457-.618m5.77 18.09V2.942q2.919.886 4.806 3.355T21.5 12t-1.886 5.704t-4.806 3.355M12 21.5q-.5 0-.99-.06q-.49-.061-.972-.163V2.723q.481-.102.971-.163q.491-.06.991-.06q.462 0 .914.05t.894.13v18.64q-.442.08-.895.13T12 21.5"></svg:path>`,
})
export class MaterialSymbolsLightMotionModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
