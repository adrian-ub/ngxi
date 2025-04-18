import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiNetworkIcon],svg[hugeicons-ai-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.25 5.5a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m0 0v3.75c0 .698 0 1.047-.086 1.33a2 2 0 0 1-1.333 1.334C19.547 12 19.198 12 18.5 12M2.75 18.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 0v-3.75c0-.698 0-1.047.086-1.33a2 2 0 0 1 1.333-1.334C4.453 12 4.802 12 5.5 12m0-9.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m0 0h3.75c.698 0 1.047 0 1.33.086a2 2 0 0 1 1.334 1.333C12 4.453 12 4.802 12 5.5m6.5 15.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m0 0h-3.75c-.698 0-1.047 0-1.33-.086a2 2 0 0 1-1.334-1.333C12 19.547 12 19.198 12 18.5"></svg:path><svg:path d="M5.549 11.951c0-3.064 0-4.596.952-5.548s2.484-.952 5.548-.952s4.596 0 5.548.952s.952 2.484.952 5.548s0 4.596-.952 5.548s-2.484.952-5.548.952s-4.596 0-5.548-.952s-.952-2.484-.952-5.548"></svg:path><svg:path d="m12.499 14.5l-1.46-4.521a.72.72 0 0 0-.694-.479a.72.72 0 0 0-.693.479L8.192 14.5m6.807-5v5M8.729 13h3.232"></svg:path></svg:g>`,
})
export class HugeiconsAiNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
