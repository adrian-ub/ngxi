import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirInfoCircleSolidIcon],svg[iconoir-info-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 10.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75M12.568 8a.75.75 0 1 0-1.115-1.003l-.01.011a.75.75 0 1 0 1.114 1.004z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirInfoCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
