import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSimulationTableIcon],svg[ix-simulation-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64v362.667h106.667V384h-64V106.667h298.666V320H448V64zm128 277.333V384h42.667v85.333h128V384h42.666v85.333h85.334v-42.666H448v-85.334H320v85.334h-42.667v-85.334zM192 128h-64v42.667h64zm32 0h64v42.667h-64zm160 0h-64v42.667h64zm-256 64h64v42.667h-64zm160 0h-64v42.667h64zm32 0h64v42.667h-64zm-128 64h-64v42.667h64zm32 0h64v42.667h-64zm160 0h-64v42.667h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxSimulationTableIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
