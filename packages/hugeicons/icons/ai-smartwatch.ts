import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiSmartwatchIcon],svg[hugeicons-ai-smartwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.121 17.121C13.243 18 11.828 18 9 18s-4.243 0-5.121-.879C3 16.243 3 14.828 3 12s0-4.243.879-5.121C4.757 6 6.172 6 9 6s4.243 0 5.121.879m6.129-.129L18 9h-2m3.5-2.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m.75 10.5L18 15h-2m3.5 2.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m.75-5.25H12m7.5 0a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0M13 6l-.272-1.09c-.335-1.338-.502-2.007-.978-2.42a2 2 0 0 0-.165-.129C11.07 2 10.38 2 9 2s-2.069 0-2.585.361q-.086.06-.165.129c-.476.413-.643 1.082-.978 2.42L5 6m0 12l.272 1.09c.335 1.338.502 2.007.978 2.42q.08.069.165.129C6.93 22 7.62 22 9 22s2.069 0 2.585-.361q.085-.06.165-.129c.476-.413.643-1.082.978-2.42L13 18" color="currentColor"></svg:path>`,
})
export class HugeiconsAiSmartwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
