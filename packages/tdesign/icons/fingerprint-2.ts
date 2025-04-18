import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFingerprint2Icon],svg[tdesign-fingerprint-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11c0-5.523-4.477-10-10-10S2 5.477 2 11v3c0 2.64.57 5.15 1.592 7.412l.413.911l1.822-.824l-.412-.911A15.9 15.9 0 0 1 4 14v-3a8 8 0 1 1 16 0v3h2zm-4.5 0a5.5 5.5 0 1 0-11 0v3c0 2.8.853 5.403 2.314 7.56l.561.829l1.656-1.122l-.56-.828A11.44 11.44 0 0 1 8.5 14v-3a3.5 3.5 0 1 1 7 0v3a4.5 4.5 0 0 0 4.5 4.5h2v-2h-2a2.5 2.5 0 0 1-2.5-2.5zM11 10v4c0 3.39 1.875 6.34 4.639 7.874l.874.486l.97-1.75l-.874-.484A7 7 0 0 1 13 14v-4z"></svg:path>`,
})
export class TdesignFingerprint2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
