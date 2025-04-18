import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserSettings02Icon],svg[hugeicons-user-settings-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m5.5.143V8m0-.857c-.723 0-1.36-.379-1.734-.954m1.734.954c.723 0 1.36-.379 1.734-.954M19.5 2.857c.723 0 1.36.379 1.734.954M19.5 2.857c-.723 0-1.36.379-1.734.954m1.734-.954V2M22 3.286l-.766.525M17 6.714l.766-.525M17 3.286l.766.525M22 6.714l-.766-.525m0-2.378c.22.34.35.75.35 1.189s-.13.849-.35 1.189M17.766 3.81c-.22.34-.35.75-.35 1.189s.13.849.35 1.189" color="currentColor"></svg:path>`,
})
export class HugeiconsUserSettings02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
