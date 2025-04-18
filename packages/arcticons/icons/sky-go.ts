import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSkyGoIcon],svg[arcticons-sky-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24h37M21.798 8.73v8.972m.001-1.906l4.061-4.042m-2.768 2.756l3.192 3.178M15.926 17.2c.41.344.852.501 1.845.501h.503c.819 0 1.483-.665 1.483-1.486s-.664-1.486-1.483-1.486h-1.006c-.82 0-1.483-.665-1.483-1.486s.664-1.486 1.483-1.486h.503c.993 0 1.435.158 1.844.502m10.503 5.443l-2.389-5.944m4.486 0L29.05 20.73m-.429 12.52l-9.242 5.336V27.914z"></svg:path>`,
})
export class ArcticonsSkyGoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
