import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhVkIcon],svg[whh-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M772 323q65 48 158.5 139.5T1024 576q0 27-15.5 45.5T960 640H854q-30 0-54-25q-60-64-123-123t-101-84v200q0 13-9.5 22.5T544 640H416q-23 0-66.5-35T256 512q-72-83-164-242T0 64q0-35 15.5-49.5T64 0h106q14 0 29.5 12T223 40q2 5 20 42.5t23 47.5l21 42l24.5 46.5L334 256l26 39l24 29V32q0-13 9.5-22.5T416 0h128q13 0 22.5 9.5T576 32v228q102-69 224-235q8-10 23.5-17.5T854 0h106q35 0 49.5 16t14.5 48q0 44-81.5 122.5T772 323"></svg:path>`,
})
export class WhhVkIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
