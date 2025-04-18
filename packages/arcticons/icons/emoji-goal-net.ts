import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiGoalNetIcon],svg[arcticons-emoji-goal-net-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 37.706V10.294h-37v27.412m37 0l-6.472-6.477m-23.413-.287h23.481M5.5 37.706l6.472-6.477M5.5 10.294l6.632 20.351M10.4 26.017h27.654M8.881 21.034h29.885m-14.929-10.74v20.648m-4.981-20.648v20.648m-4.981-20.648v20.648M8.894 10.294V34.31m19.923-24.016v20.648m4.981-20.648v20.648m4.981-20.648v23.688m-9.962-20.84v10.799M7.375 16.05H40.9m-1.708 4.924l3.207 3.21m-1.684-8.134l1.785 1.533m-4.908 8.434l4.908 4.628M8.835 21.034L5.5 24m1.875-7.95l-1.84 2.033m5.068 7.747l-5.088 4.612m30.581.5L42.5 10.294"></svg:path>`,
})
export class ArcticonsEmojiGoalNetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
