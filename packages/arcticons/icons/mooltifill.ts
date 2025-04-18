import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMooltifillIcon],svg[arcticons-mooltifill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="29.135" height="25.056" x="9.432" y="18.444" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:circle cx="24" cy="30.973" r="3.496" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.26 13.24A8.74 8.74 0 0 1 24 4.5h0a8.74 8.74 0 0 1 8.74 8.74m0 0v5.204M15.26 13.24l.01 5.204m-.01-5.204v5.204"></svg:path>`,
})
export class ArcticonsMooltifillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
