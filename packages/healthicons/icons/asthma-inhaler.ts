import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAsthmaInhalerIcon],svg[healthicons-asthma-inhaler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.865 6.134a1 1 0 0 1 .466.607l1.075 4.012l.771-.351a1 1 0 0 1 1.38.651L23.83 27H30a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H17.051a5 5 0 0 1-4.822-3.678L6.553 16.614a1 1 0 0 1 .55-1.174l1.075-.49l-1.506-5.62a1 1 0 0 1 .707-1.225l7.727-2.07a1 1 0 0 1 .76.099m-5.841 7.977L8.863 9.778l5.795-1.553l.902 3.367z" clip-rule="evenodd"></svg:path><svg:path d="M33 29h2v10h-2zm5 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class HealthiconsAsthmaInhalerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
