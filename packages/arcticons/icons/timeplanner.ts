import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTimeplannerIcon],svg[arcticons-timeplanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.718 29.587h6.816v6.982h-6.816z"></svg:path><svg:rect width="2.871" height="6.947" x="33.98" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.173" ry="1.173"></svg:rect><svg:rect width="2.871" height="6.947" x="11.33" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.173" ry="1.173"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.05 7.132h19.93m7.683 8.902v25.662c0 .444-.26.804-.581.804H6.917c-.32 0-.58-.36-.58-.804M11.33 7.132H6.918c-.32 0-.581.36-.581.805v33.736"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.85 7.132h4.253c.31 0 .56.36.56.805v33.736M6.337 16.034h35.326"></svg:path>`,
})
export class ArcticonsTimeplannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
