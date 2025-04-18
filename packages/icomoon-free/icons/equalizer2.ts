import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeEqualizer2Icon],svg[icomoon-free-equalizer2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7h.25c.412 0 .75-.338.75-.75v-2.5a.75.75 0 0 0-.75-.75H14V0h-2v3h-.25a.75.75 0 0 0-.75.75v2.5c0 .412.338.75.75.75H12v9h2zm-2-3h2v2h-2zm-2.75 9c.412 0 .75-.338.75-.75v-2.5A.753.753 0 0 0 9.25 9H9V0H7v9h-.25a.753.753 0 0 0-.75.75v2.5c0 .412.338.75.75.75H7v3h2v-3zM7 10h2v2H7zM4.25 7c.412 0 .75-.338.75-.75v-2.5A.75.75 0 0 0 4.25 3H4V0H2v3h-.25a.75.75 0 0 0-.75.75v2.5c0 .412.337.75.75.75H2v9h2V7zM2 4h2v2H2z"></svg:path>`,
})
export class IcomoonFreeEqualizer2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
