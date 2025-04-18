import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsKeyboardShiftIcon],svg[proicons-keyboard-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.503 11.913l6.601-8.252a2.428 2.428 0 0 1 3.792 0l6.6 8.251c.83 1.037.092 2.573-1.235 2.573h-4.095v3.725c0 1.064 0 1.596-.207 2.003a1.9 1.9 0 0 1-.83.83c-.406.207-.938.207-2.002.207h-.254c-1.064 0-1.596 0-2.002-.207a1.9 1.9 0 0 1-.83-.83c-.207-.407-.207-.939-.207-2.003v-3.725H4.739c-1.327 0-2.065-1.536-1.236-2.572"></svg:path>`,
})
export class ProiconsKeyboardShiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
