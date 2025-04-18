import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwaySharing1Icon],svg[subway-sharing-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M325.8 0v186.2h69.8v46.5H116.4v-46.5h69.8V0H0v186.2h69.8v93.1h162.9v46.5h-69.8V512h186.2V325.8h-69.8v-46.5h162.9v-93.1H512V0zM46.5 139.6V46.5h93.1v93.1zm256 232.8v93.1h-93.1v-93.1zm163-232.8h-93.1V46.5h93.1z"></svg:path>`,
})
export class SubwaySharing1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
