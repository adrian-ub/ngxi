import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOllamaIcon],svg[arcticons-ollama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.125 42.5c-.68-2.589-.258-5.178.971-7.767c-2.259-2.467-2.127-6.929 0-9.376c-3.78-4.258-2.17-11.787 4.754-11.766c1.511-1.973 3.704-3.622 6.15-3.725"></svg:path><svg:path fill="none" stroke="currentColor" d="M19.303 12.006c0-4.65-1.428-6.506-3.184-6.506s-2.315 5.607-1.699 8.823m14.277-2.317c0-4.65 1.428-6.506 3.184-6.506s2.315 5.607 1.699 8.823"></svg:path><svg:ellipse cx="24" cy="26.987" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.892" ry="3.805"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 26.987v1.087m0-1.087l.917-.917m-.917.917l-.917-.917"></svg:path><svg:circle cx="17.205" cy="21.008" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.795" cy="21.008" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.875 42.5c.68-2.589.258-5.178-.971-7.767c2.259-2.467 2.127-6.929 0-9.376c3.78-4.258 2.17-11.787-4.754-11.766c-1.511-1.973-3.704-3.622-6.15-3.725"></svg:path>`,
})
export class ArcticonsOllamaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
