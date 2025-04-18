import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRightClickIcon],svg[material-symbols-light-right-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.589 16.962l.336-1.062q1.33-.325 2.203-1.4T16 12q0-1.65-1.175-2.825T12 8q-1.425 0-2.49.863q-1.066.862-1.39 2.212l-1.081.317q.24-1.88 1.638-3.136T12 7q2.077 0 3.539 1.462T17 12q0 1.925-1.265 3.323q-1.266 1.398-3.146 1.639m-8.345 3.826l-1.032-1.032l4.813-4.794l-2.794-.923L12 12l-2.039 6.77l-.922-2.795z"></svg:path>`,
})
export class MaterialSymbolsLightRightClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
