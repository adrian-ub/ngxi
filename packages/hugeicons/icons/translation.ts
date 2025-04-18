import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTranslationIcon],svg[hugeicons-translation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 5.966h3.15m3.85 0h-1.75m-2.1 0h2.1m-2.1 0V5m2.1.966c-.37 1.32-1.142 2.568-2.025 3.665M5.975 12c.713-.656 1.52-1.46 2.25-2.369m0 0c-.45-.528-1.08-1.381-1.26-1.767m1.26 1.767l1.35 1.403"></svg:path><svg:path d="M7.022 16.978c.055 1.72.242 2.775.886 3.56a4 4 0 0 0 .554.554C9.57 22 11.212 22 14.5 22s4.931 0 6.038-.908q.304-.25.554-.554C22 19.43 22 17.788 22 14.5c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554c-.782-.641-1.831-.83-3.538-.885m-9.978 9.955c-1.72-.055-2.775-.242-3.56-.886a4 4 0 0 1-.554-.554C2 14.43 2 12.788 2 9.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 2 6.212 2 9.5 2c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554c.644.785.831 1.84.886 3.56l.022.001m-9.978 9.955L17 7.023"></svg:path><svg:path d="m13 19l.833-2M18 19l-.833-2m-3.334 0l1.667-4l1.667 4m-3.334 0h3.334"></svg:path></svg:g>`,
})
export class HugeiconsTranslationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
