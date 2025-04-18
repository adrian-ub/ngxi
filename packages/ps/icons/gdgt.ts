import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psGdgtIcon],svg[ps-gdgt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 25v276l23 23h253v69H24v46l23 23h276l23-23V324l69-138V48l-69 158V25L323 2H24zm69 230V71h207v184z"></svg:path>`,
})
export class PsGdgtIcon {
  readonly viewBox = input("0 0 416 488")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
