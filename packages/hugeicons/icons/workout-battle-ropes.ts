import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutBattleRopesIcon],svg[hugeicons-workout-battle-ropes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.994 4.498a1.5 1.5 0 1 1-3-.001a1.5 1.5 0 0 1 3 0M20 8.998a1.87 1.87 0 0 1-1.484-.73l-1.026-1.35a5 5 0 0 0-.27-.338a1.88 1.88 0 0 0-2.222-.374m6.003 10.792a4.5 4.5 0 0 1-3.365-1.519l-.678-.767a6.77 6.77 0 0 0-3.713-2.149m-2.376-.136c-.31 0-.466 0-.61-.021c-1.24-.18-1.945-1.598-2.765-2.408m5.505-3.023L9.904 8.386l-2.06-.13M6.358 21.003v-4.638l-.185-.334l-.984-.909m0 0l-1.813-1.444a1 1 0 0 1-.378-.782v-.019l1.616-4.304l.076-.104a1 1 0 0 1 .891-.405l2.263.194M5.189 15.12l2.655-6.864" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutBattleRopesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
