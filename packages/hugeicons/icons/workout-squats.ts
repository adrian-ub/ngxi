import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutSquatsIcon],svg[hugeicons-workout-squats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M10.948 21l1.13-3.41c.404-1.215.606-1.823.304-2.244c-.301-.42-.94-.42-2.215-.42H8.933M18 8.346l-1.736.996c-.878.504-1.317.756-1.802.779c-.485.022-.945-.188-1.865-.608l-.783-.358m-2.881 5.77H7.925c-.948 0-1.423 0-1.725-.372c-.302-.374-.216-.793-.043-1.633c.29-1.406.872-3.153 1.935-4.341c.294-.328.44-.492.763-.56s.581.05 1.097.286l1.862.85m-2.881 5.77c.241-1.315 1.155-4.312 2.88-5.77" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutSquatsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
