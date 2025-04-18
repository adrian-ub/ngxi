import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMotionModeIcon],svg[material-symbols-motion-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.85v14.3q-.425-.425-.8-.9t-.7-.975V6.725q.325-.5.7-.975t.8-.9m4-2.4v19.1q-.525-.175-1.025-.387T7 20.675V3.325q.475-.275.975-.488T9 2.45m7 18.725V2.825Q18.65 4 20.325 6.45T22 12t-1.675 5.55T16 21.175M12 22q-.25 0-.5-.012t-.5-.038V2.05q.25-.025.5-.037T12 2q.5 0 1 .05t1 .15v19.6q-.5.1-1 .15T12 22"></svg:path>`,
})
export class MaterialSymbolsMotionModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
