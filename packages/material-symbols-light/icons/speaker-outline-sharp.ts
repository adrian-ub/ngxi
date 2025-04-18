import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeakerOutlineSharpIcon],svg[material-symbols-light-speaker-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21H6V3h12zm-1-1V4H7v16zM12.004 8.616q.667 0 1.14-.476t.472-1.143t-.476-1.14t-1.143-.472t-1.14.475t-.472 1.144t.475 1.14t1.144.472M12 18.462q1.439 0 2.45-1.012T15.462 15t-1.012-2.45T12 11.538T9.55 12.55T8.538 15t1.012 2.45T12 18.462m-.001-1q-1.016 0-1.739-.724q-.722-.723-.722-1.74q0-1.015.724-1.737q.723-.723 1.74-.723q1.015 0 1.737.724q.722.723.722 1.74q0 1.015-.723 1.737t-1.74.722M7 4v16z"></svg:path>`,
})
export class MaterialSymbolsLightSpeakerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
