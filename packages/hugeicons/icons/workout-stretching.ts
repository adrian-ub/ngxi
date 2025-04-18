import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutStretchingIcon],svg[hugeicons-workout-stretching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M14.36 15l.944-.546c1.075-.622 1.612-.933 1.684-1.376a1 1 0 0 0 .01-.209c-.036-.446-.546-.79-1.565-1.478l-4.707-3.177C8.877 6.966 8.452 4.69 9.75 3"></svg:path><svg:path d="M10.726 8.214C8.226 10.714 7 17.632 7 21m3.726-12.786C8.877 6.966 8.452 4.69 9.75 3m.975 5.214L13.372 10m.988 5l.944-.546c1.075-.622 1.612-.933 1.684-1.376a1 1 0 0 0 .01-.209c-.036-.446-.546-.79-1.565-1.478L13.373 10M15 21c-.973-1.135-1.974-2.7-2.95-4.142c-.683-1.01-1.025-1.516-1.065-2.045M13.373 10a15.6 15.6 0 0 0-1.77 2.894c-.44.927-.659 1.39-.618 1.92m0 0L8 14"></svg:path></svg:g>`,
})
export class HugeiconsWorkoutStretchingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
