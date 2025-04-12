import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsRocketLaunchSolidIcon],svg[heroicons-rocket-launch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9.315 7.584A15.72 15.72 0 0 1 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436q.083.52.084 1.064a6.75 6.75 0 0 1-6.75 6.75a.75.75 0 0 1-.75-.75v-4.131l-.027-.021A15.8 15.8 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75a6.75 6.75 0 0 1 7.815-6.666M15 6.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd"></svg:path><svg:path d="M5.26 17.242a.75.75 0 1 0-.897-1.203a5.24 5.24 0 0 0-2.05 5.022a.75.75 0 0 0 .625.627q.398.061.812.062a5.24 5.24 0 0 0 4.21-2.113a.75.75 0 1 0-1.202-.897a3.74 3.74 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008"></svg:path></svg:g>`
})
export class HeroiconsRocketLaunchSolidIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
