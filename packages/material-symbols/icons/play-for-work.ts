import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlayForWorkIcon],svg[material-symbols-play-for-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-2.5 0-4.25-1.75T6 14h2q0 1.65 1.175 2.825T12 18t2.825-1.175T16 14h2q0 2.5-1.75 4.25T12 20m0-5.025l-4-4L9.4 9.55l1.6 1.6V5h2v6.15l1.6-1.6l1.4 1.425z"></svg:path>`,
})
export class MaterialSymbolsPlayForWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
