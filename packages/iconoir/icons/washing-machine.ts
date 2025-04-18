import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWashingMachineIcon],svg[iconoir-washing-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 4v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-3 1.01l.01-.011"></svg:path><svg:path d="M12 19a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M12 16a3 3 0 0 1-3-3"></svg:path></svg:g>`,
})
export class IconoirWashingMachineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
