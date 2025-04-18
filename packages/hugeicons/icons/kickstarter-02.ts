import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKickstarter02Icon],svg[hugeicons-kickstarter-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 7.8v8.4c0 .994.84 1.8 1.875 1.8s1.875-.806 1.875-1.8v-2.859l2.839 3.891c.594.815 1.763 1.012 2.611.442s1.055-1.692.46-2.507L14.35 12l2.31-3.167c.595-.815.389-1.937-.46-2.507c-.848-.57-2.017-.373-2.611.442l-2.838 3.89V7.8c0-.994-.84-1.8-1.876-1.8C7.84 6 7 6.806 7 7.8"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsKickstarter02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
