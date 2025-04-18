import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwaySharingIcon],svg[subway-sharing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M325.8 0v186.2h69.8v46.5H116.4v-46.5h69.8V0H0v186.2h69.8v93.1h162.9v46.5h-69.8V512h186.2V325.8h-69.8v-46.5h162.9v-93.1H512V0z"></svg:path>`,
})
export class SubwaySharingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
