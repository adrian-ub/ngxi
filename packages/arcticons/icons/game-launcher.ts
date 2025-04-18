import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGameLauncherIcon],svg[arcticons-game-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.163 26.948a9.7 9.7 0 0 0 6.587 2.576c5.385 0 9.75-4.365 9.75-9.75s-4.365-9.75-9.75-9.75a9.7 9.7 0 0 0-6.062 2.122h-7.376a9.7 9.7 0 0 0-6.062-2.122c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a9.7 9.7 0 0 0 6.587-2.576z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 19.774v12.645a5.557 5.557 0 0 1-5.557 5.557c-1.26 0-2.496-.336-3.343-1.144c-1.545-1.473-4.625-4.474-6.162-5.97a2.4 2.4 0 0 0-1.676-.681h-5.524c-.626 0-1.227.244-1.676.68c-1.537 1.497-4.617 4.498-6.162 5.971c-.847.808-2.082 1.144-3.343 1.144A5.557 5.557 0 0 1 4.5 32.419V19.774"></svg:path><svg:circle cx="14.25" cy="19.774" r="3.003" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.25" cy="19.774" r="6.607" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.75" cy="19.774" r="6.607" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.348" cy="19.774" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.152" cy="19.774" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.75" cy="16.372" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.75" cy="23.176" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsGameLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
