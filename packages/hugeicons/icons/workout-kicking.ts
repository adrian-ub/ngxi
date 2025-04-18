import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutKickingIcon],svg[hugeicons-workout-kicking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M8.948 14H8.14c-.813 0-1.22 0-1.5-.237c-.282-.237-.348-.636-.482-1.434l-.077-.459c-.072-.428-.108-.643-.055-.847c.052-.204.187-.375.457-.717l1.25-1.582M9.785 6L8.697 7.5l-.966 1.224M9.786 6l2.177-3M9.786 6l4.5 3.5m0 0L20 3m-5.714 6.5l-1.319 3M7.731 8.724l5.236 3.776m0 0V21" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutKickingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
