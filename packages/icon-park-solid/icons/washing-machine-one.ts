import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWashingMachineOneIcon],svg[icon-park-solid-washing-machine-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWashingMachineOne0"><svg:g fill="none"><svg:rect width="32" height="40" x="8" y="4" stroke="#fff" stroke-width="4" rx="2"></svg:rect><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M8 12a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2z"></svg:path><svg:circle cx="14" cy="9" r="2" fill="#000"></svg:circle><svg:circle cx="20" cy="9" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="29" r="7" fill="#fff" stroke="#fff" stroke-width="4"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWashingMachineOne0)"></svg:path>`,
})
export class IconParkSolidWashingMachineOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
