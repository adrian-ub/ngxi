import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHeartbeatOutline24pxIcon],svg[healthicons-heartbeat-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.27 5.575a.75.75 0 0 1 1.436-.077l2.051 5.752c.73 0 1.194-.136 1.685-.504a2 2 0 0 1 .514-.452L19 10.25v.018a2 2 0 1 1 0 3.465v.017l-.044-.044a2 2 0 0 1-.49-.422c-.455-.33-.882-.443-1.515-.46h-.697a.75.75 0 0 1-.706-.499l-1.408-3.95l-2.42 10.05a.75.75 0 0 1-1.437.072l-2.824-8.09l-.76 1.94c-.113.287-.39.653-.699.653H2v-1.5h3.489l1.313-3.524a.75.75 0 0 1 1.406.027l2.651 7.592z"></svg:path>`,
})
export class HealthiconsHeartbeatOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
