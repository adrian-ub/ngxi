import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelWayfinderLiftArrowUpHumanDownPersonUserLiftElevatorIcon],svg[streamline-travel-wayfinder-lift-arrow-up-human-down-person-user-lift-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="2.5" cy="2.5" r="2"></svg:circle><svg:path d="M1.5 6.5h2a1 1 0 0 1 1 1v3h0h-4h0v-3a1 1 0 0 1 1-1Zm-1 4v3m4-3v3m4-8L11 3l2.5 2.5m-5 4L11 12l2.5-2.5"></svg:path></svg:g>`,
})
export class StreamlineTravelWayfinderLiftArrowUpHumanDownPersonUserLiftElevatorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
