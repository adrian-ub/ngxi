import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiskdiggerProIcon],svg[arcticons-diskdigger-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="29.448" cy="17.697" r="7.568"></svg:circle><svg:path d="m34.799 23.049l.881.881m0 2.203l5.617 5.617l2.203-2.204l-5.616-5.616H35.68z"></svg:path></svg:g><svg:rect width="29.828" height="9.664" x="4.5" y="28.207" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.859" ry="1.859"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 30.066l2.753-9.504a1.58 1.58 0 0 1 1.517-1.14h21.288a1.58 1.58 0 0 1 1.517 1.14l2.753 9.504M9.485 33.039h19.858"></svg:path>`,
})
export class ArcticonsDiskdiggerProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
